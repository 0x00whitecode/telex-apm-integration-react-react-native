"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
exports.logCustomEvent = logCustomEvent;
// src/customIntegration.ts
const react_1 = __importDefault(require("react"));
const trackingHelper_1 = require("./utils/trackingHelper");
class ErrorBoundary extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        try {
            (0, trackingHelper_1.sendDataToTelex)('YOUR_TELEX_WEBHOOK_URL', {
                event_name: 'error',
                message: error.message,
                status: 'failure',
                error_info: info,
                timestamp: new Date().toISOString(),
            });
        }
        catch (e) {
            console.error('Failed to send error data to Telex:', e);
        }
    }
    render() {
        if (this.state.hasError) {
            // Render the provided fallback UI or a default message
            return this.props.fallback || Something;
            went;
            wrong.Please;
            try { }
            finally { }
            again;
            later. < /h1>;
        }
        return this.props.children;
    }
}
exports.ErrorBoundary = ErrorBoundary;
function logCustomEvent(telexWebhookUrl = 'YOUR_TELEX_WEBHOOK_URL', eventData) {
    try {
        (0, trackingHelper_1.sendDataToTelex)(telexWebhookUrl, {
            event_name: 'custom_event',
            message: 'A custom event occurred',
            status: 'info',
            event_data: eventData,
            timestamp: new Date().toISOString(),
        });
    }
    catch (e) {
        console.error('Failed to send custom event data to Telex:', e);
    }
}
