import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { Analytics } from "@/components/terrano/analytics";
import { Providers } from "./providers";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://terrano.com.br";
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

const analyticsCoreScript = `
  window.dataLayer = window.dataLayer || [];
  window.terranoTrack = window.terranoTrack || function(name, params) {
    var payload = Object.assign({ event: name }, params || {});
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    if (window.gtag) window.gtag('event', name, params || {});
    if (window.fbq) window.fbq('trackCustom', name, params || {});
  };
  if (!window.__terranoAnalyticsInstalled) {
    window.__terranoAnalyticsInstalled = true;
    var attributionKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'];
    var captureAttribution = function() {
      try {
        var params = new URLSearchParams(window.location.search);
        attributionKeys.forEach(function(key) {
          var value = params.get(key);
          if (value) window.localStorage.setItem('terrano_' + key, value);
        });
      } catch (error) {}
    };
    var appendAttributionToForm = function(form) {
      try {
        attributionKeys.forEach(function(key) {
          var stored = window.localStorage.getItem('terrano_' + key);
          if (!stored || form.querySelector('[name="' + key + '"]')) return;
          var input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = stored;
          form.appendChild(input);
        });
      } catch (error) {}
    };
    var sendPageView = function() {
      var params = { page_path: window.location.pathname, page_location: window.location.href };
      window.dataLayer.push(Object.assign({ event: 'page_view' }, params));
      if (window.gtag && '${gaId}') window.gtag('config', '${gaId}', params);
      if (window.fbq) window.fbq('track', 'PageView');
    };
    var originalPushState = history.pushState;
    var originalReplaceState = history.replaceState;
    history.pushState = function() {
      originalPushState.apply(this, arguments);
      setTimeout(sendPageView, 0);
    };
    history.replaceState = function() {
      originalReplaceState.apply(this, arguments);
      setTimeout(sendPageView, 0);
    };
    window.addEventListener('popstate', sendPageView);
    document.addEventListener('click', function(event) {
      var target = event.target && event.target.closest ? event.target.closest('[data-analytics-event]') : null;
      if (!target) return;
      window.terranoTrack(target.dataset.analyticsEvent || 'interaction', {
        label: target.dataset.analyticsLabel || (target.textContent || '').trim() || 'sem_label',
        location: target.dataset.analyticsLocation || window.location.pathname
      });
    });
    document.addEventListener('submit', function(event) {
      var form = event.target;
      if (!form || !form.dataset || !form.dataset.analyticsEvent) return;
      appendAttributionToForm(form);
      window.terranoTrack(form.dataset.analyticsEvent, {
        label: form.dataset.analyticsLabel || form.name || 'formulario',
        location: window.location.pathname
      });
    });
    captureAttribution();
    sendPageView();
  }
`;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Terrano | Aluguel de Máquinas Agrícolas",
    template: "%s | Terrano",
  },
  description:
    "Conecte produtores que precisam de máquinas agrícolas a proprietários com tratores, colheitadeiras, pulverizadores e implementos disponíveis para locação.",
  applicationName: "Terrano",
  keywords: [
    "Terrano",
    "aluguel de veículos agrícolas",
    "aluguel de máquinas agrícolas",
    "tratores para aluguel",
    "colheitadeira para aluguel",
    "pulverizador agrícola",
    "locação agrícola",
    "máquinas agrícolas para alugar",
    "marketplace agrícola",
  ],
  authors: [
    {
      name: "Terrano",
    },
  ],
  creator: "Terrano",
  publisher: "Terrano",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Terrano | Máquinas que movem o campo",
    description:
      "Produtores publicam demandas. Proprietários enviam propostas para locação de máquinas agrícolas.",
    siteName: "Terrano",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Terrano - marketplace de máquinas agrícolas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terrano | Aluguel de Máquinas Agrícolas",
    description:
      "Marketplace para produtores publicarem demandas e proprietários disponibilizarem máquinas agrícolas.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Terrano",
    url: siteUrl,
    slogan: "Máquinas que movem o campo.",
    sameAs: [],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Terrano",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/explorar?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Terrano" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script dangerouslySetInnerHTML={{ __html: analyticsCoreScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased">
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              title="Google Tag Manager"
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
