declare module "*.css";
declare module "*.jpg";
declare module "*.png";

interface Window {
  __terranoAnalyticsInstalled?: boolean;
  dataLayer?: Array<Record<string, unknown>>;
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
  terranoTrack?: (name: string, params?: Record<string, string | number | boolean>) => void;
}
