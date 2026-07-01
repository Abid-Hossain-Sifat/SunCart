import { createAuthClient } from "better-auth/react"

// baseURL now comes entirely from env (NEXT_PUBLIC_APP_URL), no hardcoded
// localhost. window.location.origin is used as a safety-net only if the
// env var is somehow missing at runtime in the browser.
export const authClient = createAuthClient({
    baseURL:
        process.env.NEXT_PUBLIC_APP_URL ||
        (typeof window !== "undefined" ? window.location.origin : undefined),
})