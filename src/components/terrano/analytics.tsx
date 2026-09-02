"use client";

import { useEffect } from "react";
import Script from "next/script";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

function trackEvent(name: string, params: Record<string, string | number | boolean> = {}) {
  if (window.terranoTrack) {
    window.terranoTrack(name, params);
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: name, ...params });
}

export function ConversionBeacon({ name, label }: { name: string; label: string }) {
  useEffect(() => {
    trackEvent(name, {
      label,
      location: window.location.pathname,
    });
  }, [label, name]);

  return null;
}

export function Analytics() {
  return (
    <>
      <span hidden data-analytics-root />
      {gtmId && (
        <Script id="gtm-loader" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            (function(w,d,s,l,i){var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      )}
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga-loader" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}', { send_page_view: false });
            `}
          </Script>
        </>
      )}
      {metaPixelId && (
        <Script id="meta-pixel-loader" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
          `}
        </Script>
      )}
    </>
  );
}
