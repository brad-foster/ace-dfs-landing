import { createClient } from "@supabase/supabase-js";
import {
    createError,
    defineEventHandler,
    getHeader,
    getRequestIP,
    getRequestURL,
    readBody,
    setResponseStatus,
} from "h3";

const EMAIL_REGEX = /^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}$/i;

export default defineEventHandler(async (event) => {
    const requestUrl = getRequestURL(event);
    const requestIp = getRequestIP(event) ?? "unknown";
    const userAgent = getHeader(event, "user-agent") ?? "unknown";

    console.info("[waitlist] request", {
        method: event.method,
        path: requestUrl.pathname,
        ip: requestIp,
        userAgent,
    });

    const body = await readBody<{ email?: string }>(event);
    const rawEmail = body?.email ?? "";
    const email = rawEmail.trim().toLowerCase();

    if (email.length < 5 || email.length > 254 || !EMAIL_REGEX.test(email)) {
        throw createError({
            statusCode: 400,
            statusMessage: "Please enter a valid email address.",
        });
    }

    const config = useRuntimeConfig();
    const supabaseUrl = config.supabaseUrl as string | undefined;
    const supabaseAnonKey = config.supabaseAnonKey as string | undefined;

    if (!supabaseUrl || !supabaseAnonKey) {
        throw createError({
            statusCode: 500,
            statusMessage: "Supabase configuration is missing.",
        });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
        auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error } = await supabase.from("waitlist").insert({ email });

    if (error) {
        if (
            error.code === "23505" ||
            error.message.includes("waitlist_email_unique")
        ) {
            throw createError({
                statusCode: 409,
                statusMessage: "That email is already on the waitlist.",
            });
        }

        throw createError({
            statusCode: 500,
            statusMessage: "Could not add you to the waitlist.",
        });
    }

    setResponseStatus(event, 201);
    return { ok: true };
});
