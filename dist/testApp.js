"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// testApp.ts
const index_1 = require("./index"); // Adjust based on the actual file structure
const trackingHelper_1 = require("./utils/trackingHelper"); // You can also log directly using this method
const telexWebhookUrl = 'YOUR_TELEX_WEBHOOK_URL'; // Replace with your actual Telex webhook URL
// Mock functions for demonstration purposes
function simulateComponentLifecycle() {
    console.log('Simulating component lifecycle...');
    (0, index_1.trackComponentLifecycle)('TestComponent', telexWebhookUrl);
}
function simulateAppPerformanceMonitoring() {
    console.log('Simulating app performance monitoring...');
    (0, index_1.monitorAppPerformance)({
        telexWebhookUrl,
        interval: 5000, // Send data every 5 seconds
    });
}
function simulateCustomEvent() {
    console.log('Simulating custom event...');
    (0, index_1.logCustomEvent)(telexWebhookUrl, { event_name: 'test_event', data: 'custom_data' });
}
function simulateErrorBoundary() {
    console.log('Simulating error boundary...');
    try {
        throw new Error('Test error');
    }
    catch (error) {
        (0, trackingHelper_1.sendDataToTelex)(telexWebhookUrl, {
            event_name: 'error',
            message: error.message,
            status: 'failure',
            error_info: error,
            timestamp: new Date().toISOString(),
        });
    }
}
// Run tests
simulateComponentLifecycle();
simulateAppPerformanceMonitoring();
simulateCustomEvent();
simulateErrorBoundary();
