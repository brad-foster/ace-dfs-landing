<template>
    <div class="min-h-screen bg-white text-secondary font-sans">
        <!-- Hero / Waitlist -->
        <section
            class="relative min-h-screen overflow-hidden bg-gradient-to-br from-secondary via-[#0b1220] to-tertiary text-white"
        >
            <div class="absolute inset-0 opacity-60" aria-hidden="true">
                <div
                    class="absolute -left-20 top-16 w-72 h-72 rounded-full bg-secondary/40 blur-3xl"
                ></div>
                <div
                    class="absolute right-0 -bottom-12 w-80 h-80 rounded-full bg-quaternary/30 blur-3xl"
                ></div>
                <div
                    class="absolute inset-0"
                    :style="{
                        backgroundImage:
                            'radial-gradient(circle at 20% 20%, rgba(34,197,94,0.18), transparent 32%), radial-gradient(circle at 80% 0%, rgba(255,107,0,0.24), transparent 28%)',
                    }"
                ></div>
                <div
                    class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.06)_1px,_transparent_0)] bg-[length:40px_40px]"
                ></div>
            </div>

            <div
                class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center"
            >
                <div class="space-y-6">
                    <div
                        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 uppercase tracking-[0.18em] text-xs shadow-[var(--shadow-tennis)]"
                    >
                        <span class="w-2 h-2 rounded-full bg-green-400"></span>
                        Waitlist now open
                    </div>

                    <div class="space-y-4">
                        <h1
                            class="text-5xl md:text-6xl font-heading font-extrabold uppercase tracking-tight text-quaternary drop-shadow-md"
                        >
                            ACE 🎾 DFS <br />Early Access
                        </h1>
                        <p
                            class="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl"
                        >
                            Be the first to take your DFS tennis game to the
                            next level with ACE 🎾 DFS. Get AI-driven insights
                            and fine-tuned lineup optimization to dominate your
                            DFS tennis contests.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div
                            class="rounded-xl bg-white/5 border border-white/10 px-5 py-4 shadow-[var(--shadow-tennis)]"
                        >
                            <div
                                class="text-3xl font-heading font-bold text-primary"
                            >
                                5x
                            </div>
                            <div class="text-sm text-white/70">
                                Faster research time
                            </div>
                        </div>
                        <div
                            class="rounded-xl bg-white/5 border border-white/10 px-5 py-4 shadow-[var(--shadow-tennis)]"
                        >
                            <div
                                class="text-3xl font-heading font-bold text-primary"
                            >
                                100k+
                            </div>
                            <div class="text-sm text-white/70">
                                Test lineups generated
                            </div>
                        </div>
                        <div
                            class="rounded-xl bg-white/5 border border-white/10 px-5 py-4 shadow-[var(--shadow-tennis)]"
                        >
                            <div
                                class="text-3xl font-heading font-bold text-primary"
                            >
                                150+
                            </div>
                            <div class="text-sm text-white/70">
                                OpenAI API calls per slate
                            </div>
                        </div>
                    </div>

                    <ul
                        class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/85"
                    >
                        <li class="flex items-start gap-2">
                            <svg
                                class="w-5 h-5 mt-0.5 text-primary"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414L8.5 11.586l6.543-6.543a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span
                                >Surface-aware projections and matchup
                                intel</span
                            >
                        </li>
                        <li class="flex items-start gap-2">
                            <svg
                                class="w-5 h-5 mt-0.5 text-primary"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414L8.5 11.586l6.543-6.543a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span
                                >Single Match and Short Slate lineup
                                generation</span
                            >
                        </li>
                        <li class="flex items-start gap-2">
                            <svg
                                class="w-5 h-5 mt-0.5 text-primary"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414L8.5 11.586l6.543-6.543a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span
                                >Matchup insights, recent form, H2H data and
                                more</span
                            >
                        </li>
                        <li class="flex items-start gap-2">
                            <svg
                                class="w-5 h-5 mt-0.5 text-primary"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414L8.5 11.586l6.543-6.543a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span
                                >Intuitive user interfaces for efficient lineup
                                generation</span
                            >
                        </li>
                    </ul>
                </div>

                <div id="waitlist" class="relative">
                    <div
                        class="rounded-2xl bg-white/10 border border-white/20 shadow-[var(--shadow-tennis)] backdrop-blur px-6 py-7 sm:p-8"
                    >
                        <div class="flex items-center gap-3 mb-4">
                            <div
                                class="w-10 h-10 rounded-full bg-quaternary border border-white/20 flex items-center justify-center text-primary font-heading font-bold"
                            >
                                #1
                            </div>
                            <div>
                                <p
                                    class="text-sm uppercase tracking-[0.18em] text-white/70"
                                >
                                    Join the waitlist
                                </p>
                                <h3
                                    class="text-2xl font-heading font-bold text-primary"
                                >
                                    Be the first to try ACE 🎾 DFS
                                </h3>
                            </div>
                        </div>

                        <form
                            class="space-y-4 max-w-md mx-auto text-left"
                            @submit.prevent="handleSubmit"
                        >
                            <label
                                class="block text-sm font-medium text-white/80"
                                for="email"
                            >
                                Enter your email:
                            </label>
                            <input
                                id="email"
                                v-model="email"
                                type="email"
                                name="email"
                                autocomplete="email"
                                required
                                class="w-full rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-quaternary/70 focus:border-transparent transition"
                                placeholder="you@example.com"
                                :disabled="status === 'loading'"
                                @blur="hasBlurredEmail = true"
                            />

                            <p
                                v-if="showEmailError"
                                class="text-xs text-red-200"
                            >
                                Please enter a valid email address.
                            </p>

                            <button
                                type="submit"
                                class="w-full flex items-center justify-center gap-2 rounded-lg bg-quaternary text-secondary font-heading font-bold px-4 py-3 uppercase tracking-wide shadow-[var(--shadow-tennis)] hover:shadow-xl hover:bg-quaternary/90 transition cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                :disabled="
                                    status === 'loading' || !isEmailValid
                                "
                            >
                                <span v-if="status !== 'loading'"
                                    >Join waitlist</span
                                >
                                <span v-else class="flex items-center gap-2">
                                    <svg
                                        class="w-4 h-4 animate-spin"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <circle
                                            class="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            stroke-width="4"
                                        ></circle>
                                        <path
                                            class="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        ></path>
                                    </svg>
                                    Submitting
                                </span>
                            </button>

                            <p class="text-xs text-white/70">
                                No spam. We will only reach out with access
                                details and launch information.
                            </p>

                            <div
                                v-if="status === 'success'"
                                class="flex items-start gap-2 text-sm text-green-400"
                            >
                                <svg
                                    class="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414L8.5 11.586l6.543-6.543a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <span>{{ message }}</span>
                            </div>
                            <div
                                v-else-if="status === 'error'"
                                class="flex items-start gap-2 text-sm text-red-200"
                            >
                                <svg
                                    class="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2H9v-2zm0-6h2v5H9V7z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <span>{{ message }}</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const email = ref("");
const status = ref<"idle" | "loading" | "success" | "error">("idle");
const message = ref("");
const hasBlurredEmail = ref(false);

const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);
const isEmailValid = computed(() => isValidEmail(email.value));
const showEmailError = computed(
    () =>
        hasBlurredEmail.value && email.value.length > 0 && !isEmailValid.value,
);

const handleSubmit = async () => {
    if (!isValidEmail(email.value)) {
        status.value = "error";
        message.value = "Please enter a valid email address.";
        return;
    }

    status.value = "loading";
    message.value = "";

    try {
        await $fetch("/api/waitlist", {
            method: "POST",
            body: { email: email.value },
        });

        status.value = "success";
        message.value =
            "You're on the list! We will reach out when ACE 🎾 DFS is available.";
        email.value = "";
        hasBlurredEmail.value = false;
    } catch (err: any) {
        console.error("Waitlist submission failed", err);
        status.value = "error";
        message.value =
            err?.data?.message ??
            err?.statusMessage ??
            "Something went wrong. Please try again.";
    }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap");

:global(body) {
    font-family: var(--font-sans, "Inter", "Helvetica", Arial, sans-serif);
    background: #ffffff;
}

.bg-primary {
    background-color: var(--color-primary);
}

.text-primary {
    color: var(--color-primary);
}

.text-secondary {
    color: var(--color-secondary);
}

.text-tertiary {
    color: var(--color-tertiary);
}

.text-quaternary {
    color: var(--color-quaternary);
}

.bg-secondary {
    background-color: var(--color-secondary);
}

.bg-tertiary {
    background-color: var(--color-tertiary);
}

.bg-quaternary {
    background-color: var(--color-quaternary);
}

.font-heading {
    font-family: var(
        --font-heading,
        "League Spartan",
        "Inter",
        Arial,
        sans-serif
    );
}
</style>
