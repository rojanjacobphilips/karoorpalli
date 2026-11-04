"use client";

import { useEffect } from "react";

export function Analytics() {
  useEffect(() => {
    if (window.localStorage.getItem("karoor-cookie") !== "accepted") return;
    const id = process.env.NEXT_PUBLIC_GA_ID;
    if (!id) return;
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    script.async = true;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", id, { anonymize_ip: true });
  }, []);
  return null;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
