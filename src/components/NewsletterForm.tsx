"use client";

import { useCallback, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { ui } from "@/content/site";
import { Captcha, resetCaptcha } from "@/components/Captcha";

export function NewsletterForm({ locale }: { locale: Locale }) {
  const t = (value: { en: string; ml: string }) => value[locale];
  const [status, setStatus] = useState<"idle" | "ok" | "error" | "captcha">("idle");
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRequired = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
  const onToken = useCallback((token: string) => setCaptchaToken(token), []);

  return (
    <form
      className="space-y-2"
      onSubmit={async (e) => {
        e.preventDefault();
        if (captchaRequired && !captchaToken) {
          setStatus("captcha");
          return;
        }
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());
        const res = await fetch("/api/forms", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, captchaToken }),
        });
        setStatus(res.ok ? "ok" : "error");
        if (res.ok) {
          form.reset();
          setCaptchaToken("");
          resetCaptcha();
        } else {
          resetCaptcha();
          setCaptchaToken("");
        }
      }}
    >
      <input type="hidden" name="type" value="newsletter" />
      <label className="sr-only" htmlFor="newsletter-email">
        Email
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="you@email.com"
        className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm"
      />
      <p className="hidden" aria-hidden>
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <Captcha onToken={onToken} />
      <button type="submit" className="w-full rounded-full bg-gold py-2 text-sm font-semibold text-maroon-deep">
        {t(ui.subscribe)}
      </button>
      {status === "ok" ? (
        <p className="text-xs text-gold">
          {locale === "ml" ? "നന്ദി. സബ്‌സ്‌ക്രൈബ് ചെയ്തു." : "Thank you. You are subscribed."}
        </p>
      ) : null}
      {status === "captcha" ? (
        <p className="text-xs text-gold/90">
          {locale === "ml" ? "ദയവായി ക്യാപ്‌ച പൂർത്തിയാക്കുക." : "Please complete the captcha."}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-xs text-gold/90">Please try again.</p>
      ) : null}
    </form>
  );
}
