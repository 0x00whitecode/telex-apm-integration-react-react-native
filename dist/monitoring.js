"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAPMDataToTelex = sendAPMDataToTelex;
// src/monitoring.ts
const trackingHelper_1 = require("./utils/trackingHelper");
function sendAPMDataToTelex(telexWebhookUrl) {
    // You can add more performance data here, like memory usage or API calls
    (0, trackingHelper_1.sendDataToTelex)(telexWebhookUrl, {
        event_name: 'app_performance',
        message: 'Application performance metrics',
        status: 'success',
        performance_data: { cpu_usage: 'low', memory_usage: 'optimal' },
        timestamp: new Date().toISOString(),
    });
}
