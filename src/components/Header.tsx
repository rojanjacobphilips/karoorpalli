"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { navigation, parish, ui } from "@/content/site";
import { OrthodoxCross } from "@/components/OrthodoxCross";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import type { Locale } from "@/lib/i18n";
import { localizedPath, switchLocalePath } from "@/lib/i18n";

export function Header({ locale, pathname }: { locale: Locale; pathname: string }) {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const suppressOpen = useRef(false);
  const t = (value: { en: string; ml: string }) => value[locale];

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setOpenMenu(null);
      }
      suppressOpen.current = false;
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function closeDropdown() {
    suppressOpen.current = true;
    setOpenMenu(null);
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    requestAnimationFrame(() => {
      suppressOpen.current = false;
    });
  }

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-maroon/10 bg-ivory/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 lg:px-6">
        <Link
          href={localizedPath(locale)}
          className="flex min-w-0 items-center gap-3"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-maroon text-gold shadow-sm">
            <OrthodoxCross className="h-7 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-lg leading-tight text-maroon md:text-xl">
              {t(parish.shortName)}
            </span>
            <span className="hidden truncate text-xs text-muted sm:block">
              {t(parish.officialName)}
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 xl:flex" aria-label="Main">
          {navigation.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => {
                if (!suppressOpen.current) setOpenMenu(item.href);
              }}
              onMouseLeave={() => {
                suppressOpen.current = false;
                setOpenMenu((current) => (current === item.href ? null : current));
              }}
              onFocus={() => {
                if (!suppressOpen.current) setOpenMenu(item.href);
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setOpenMenu((current) => (current === item.href ? null : current));
                }
              }}
            >
              <Link
                href={localizedPath(locale, item.href)}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-charcoal hover:bg-ivory-deep hover:text-maroon"
                onClick={() => closeDropdown()}
              >
                {t(item.label)}
              </Link>
              {item.children && openMenu === item.href ? (
                <div className="absolute left-0 top-full z-50 min-w-64 rounded-2xl border border-maroon/10 bg-card p-3 shadow-[var(--shadow)]">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={localizedPath(locale, child.href)}
                      className="block rounded-xl px-3 py-2 text-sm text-charcoal hover:bg-ivory-deep hover:text-maroon"
                      onClick={() => closeDropdown()}
                    >
                      {t(child.label)}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-4">
          <form
            action={localizedPath(locale, "/search")}
            className="hidden items-center rounded-full border border-maroon/15 bg-white px-3 py-1.5 lg:flex"
          >
            <Search className="h-4 w-4 text-muted" aria-hidden />
            <input
              name="q"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t(ui.search)}
              className="w-40 bg-transparent px-2 text-sm outline-none"
              aria-label={t(ui.search)}
            />
          </form>
          <ThemeSwitch locale={locale} />
          <div className="flex rounded-full border border-maroon/15 bg-white p-0.5 text-xs font-semibold">
            <Link
              href={switchLocalePath(pathname, "en")}
              className={`rounded-full px-2.5 py-1 ${locale === "en" ? "bg-maroon text-ivory" : "text-maroon"}`}
              hrefLang="en"
            >
              EN
            </Link>
            <Link
              href={switchLocalePath(pathname, "ml")}
              className={`rounded-full px-2.5 py-1 ${locale === "ml" ? "bg-maroon text-ivory" : "text-maroon"}`}
              hrefLang="ml"
              lang="ml"
            >
              മലയാളം
            </Link>
          </div>
          <Link
            href={localizedPath(locale, "/offerings")}
            className="hidden rounded-full bg-gold px-4 py-2 text-sm font-semibold text-maroon-deep shadow-sm hover:bg-gold-light md:inline-flex"
          >
            {t(ui.donate)}
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-maroon/15 xl:hidden"
            onClick={() => setOpen(true)}
            aria-label={t(ui.menu)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>

      {open ? (
        <div
          className="fixed inset-0 z-[60] bg-maroon-deep/50 xl:hidden"
          role="dialog"
          aria-modal
          onClick={() => setOpen(false)}
        >
          <div
            className="ml-auto flex h-full w-[min(100%,22rem)] flex-col overflow-y-auto bg-ivory p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <span className="font-serif text-xl text-maroon">{t(parish.shortName)}</span>
                <div className="mt-2">
                  <ThemeSwitch locale={locale} />
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-maroon/15"
                aria-label={t(ui.close)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {navigation.map((item) => (
              <div key={item.href} className="border-b border-maroon/10 py-2">
                <Link
                  href={localizedPath(locale, item.href)}
                  className="block py-2 font-medium text-maroon"
                  onClick={() => setOpen(false)}
                >
                  {t(item.label)}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={localizedPath(locale, child.href)}
                    className="block py-1.5 pl-3 text-sm text-muted"
                    onClick={() => setOpen(false)}
                  >
                    {t(child.label)}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href={localizedPath(locale, "/offerings")}
              className="mt-4 rounded-full bg-gold px-4 py-3 text-center font-semibold text-maroon-deep"
              onClick={() => setOpen(false)}
            >
              {t(ui.donate)}
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
