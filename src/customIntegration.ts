// src/customIntegration.ts
import React from 'react';
import { sendDataToTelex } from './utils/trackingHelper';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode; // Optional fallback UI
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    try {
      sendDataToTelex('YOUR_TELEX_WEBHOOK_URL', {
        event_name: 'error',
        message: error.message,
        status: 'failure',
        error_info: info,
        timestamp: new Date().toISOString(),
      });
    } catch (e) {
      console.error('Failed to send error data to Telex:', e);
    }
  }

  render() {
    if (this.state.hasError) {
      // Render the provided fallback UI or a default message
      return this.props.fallback || <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

interface CustomEventData {
  [key: string]: any;
}

export function logCustomEvent(telexWebhookUrl: string = 'YOUR_TELEX_WEBHOOK_URL', eventData: CustomEventData) {
  try {
    sendDataToTelex(telexWebhookUrl, {
      event_name: 'custom_event',
      message: 'A custom event occurred',
      status: 'info',
      event_data: eventData,
      timestamp: new Date().toISOString(),
    });
  } catch (e) {
    console.error('Failed to send custom event data to Telex:', e);
  }
}