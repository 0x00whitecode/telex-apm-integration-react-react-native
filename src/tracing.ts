// src/tracing.ts
import { sendDataToTelex } from './utils/trackingHelper';

export function trackUserInteraction(telexWebhookUrl: string) {
  // Tracks an example user interaction (like a button click)
  sendDataToTelex(telexWebhookUrl, {
    event_name: 'user_interaction',
    message: 'User clicked button',
    status: 'success',
    interaction_details: { button_name: 'Submit', page: 'Home' },
    timestamp: new Date().toISOString(),
  });
}
