"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackUserInteraction = trackUserInteraction;
// src/tracing.ts
const trackingHelper_1 = require("./utils/trackingHelper");
function trackUserInteraction(telexWebhookUrl) {
    // Tracks an example user interaction (like a button click)
    (0, trackingHelper_1.sendDataToTelex)(telexWebhookUrl, {
        event_name: 'user_interaction',
        message: 'User clicked button',
        status: 'success',
        interaction_details: { button_name: 'Submit', page: 'Home' },
        timestamp: new Date().toISOString(),
    });
}
