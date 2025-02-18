// src/index.ts
import { trackComponentLifecycle } from './componentTracking';
import { sendAPMDataToTelex } from './monitoring';
import { profileAppPerformance } from './profiling';
import { trackUserInteraction } from './tracing';
import { ErrorBoundary, logCustomEvent } from './customIntegration';

export interface TelexAPMConfig {
  telexWebhookUrl: string;
  interval: number; // Interval in milliseconds
}

export function monitorAppPerformance({ telexWebhookUrl, interval }: TelexAPMConfig): void {
  // Set an interval for sending monitoring data
  setInterval(() => {
    sendAPMDataToTelex(telexWebhookUrl);
  }, interval);

  trackUserInteraction(telexWebhookUrl);
  profileAppPerformance(telexWebhookUrl);
}

// You can now use this HOC to wrap every component in the app for lifecycle tracking
export { trackComponentLifecycle, ErrorBoundary, logCustomEvent };
