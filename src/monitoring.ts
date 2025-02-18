// src/monitoring.ts
import { sendDataToTelex } from './utils/trackingHelper';

export function sendAPMDataToTelex(telexWebhookUrl: string) {
  // You can add more performance data here, like memory usage or API calls
  sendDataToTelex(telexWebhookUrl, {
    event_name: 'app_performance',
    message: 'Application performance metrics',
    status: 'success',
    performance_data: { cpu_usage: 'low', memory_usage: 'optimal' },
    timestamp: new Date().toISOString(),
  });
}
