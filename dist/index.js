"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logCustomEvent = exports.ErrorBoundary = exports.trackComponentLifecycle = void 0;
exports.monitorAppPerformance = monitorAppPerformance;
// src/index.ts
const componentTracking_1 = require("./componentTracking");
Object.defineProperty(exports, "trackComponentLifecycle", { enumerable: true, get: function () { return componentTracking_1.trackComponentLifecycle; } });
const monitoring_1 = require("./monitoring");
const profiling_1 = require("./profiling");
const tracing_1 = require("./tracing");
const customIntegration_1 = require("./customIntegration");
Object.defineProperty(exports, "ErrorBoundary", { enumerable: true, get: function () { return customIntegration_1.ErrorBoundary; } });
Object.defineProperty(exports, "logCustomEvent", { enumerable: true, get: function () { return customIntegration_1.logCustomEvent; } });
function monitorAppPerformance({ telexWebhookUrl, interval }) {
    // Set an interval for sending monitoring data
    setInterval(() => {
        (0, monitoring_1.sendAPMDataToTelex)(telexWebhookUrl);
    }, interval);
    (0, tracing_1.trackUserInteraction)(telexWebhookUrl);
    (0, profiling_1.profileAppPerformance)(telexWebhookUrl);
}
