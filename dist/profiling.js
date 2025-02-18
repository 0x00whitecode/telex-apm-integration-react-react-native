"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileAppPerformance = profileAppPerformance;
// src/profiling.ts
const trackingHelper_1 = require("./utils/trackingHelper");
function profileAppPerformance(telexWebhookUrl) {
    // You can track memory usage, FPS, etc.
    (0, trackingHelper_1.sendDataToTelex)(telexWebhookUrl, {
        event_name: 'app_profiling',
        message: 'Application profiling data',
        status: 'success',
        profiling_data: { fps: 60, memory_usage: 'optimal' },
        timestamp: new Date().toISOString(),
    });
}
