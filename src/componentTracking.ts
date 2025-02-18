x// src/componentTracking.ts
import React, { Component, ComponentType } from 'react';
import { sendDataToTelex } from './utils/trackingHelper';

export function trackComponentLifecycle<P>(telexWebhookUrl: string) {
  return function withComponentTracking(WrappedComponent: ComponentType<P>) {
    return class extends Component<P> {
      componentDidMount() {
        sendDataToTelex(telexWebhookUrl, {
          event_name: 'component_mount',
          message: `${WrappedComponent.name} mounted`,
          status: 'success',
          component: WrappedComponent.name,
          timestamp: new Date().toISOString(),
        });
      }

      componentDidUpdate() {
        sendDataToTelex(telexWebhookUrl, {
          event_name: 'component_update',
          message: `${WrappedComponent.name} updated`,
          status: 'success',
          component: WrappedComponent.name,
          timestamp: new Date().toISOString(),
        });
      }

      componentWillUnmount() {
        sendDataToTelex(telexWebhookUrl, {
          event_name: 'component_unmount',
          message: `${WrappedComponent.name} unmounted`,
          status: 'success',
          component: WrappedComponent.name,
          timestamp: new Date().toISOString(),
        });
      }

      render() {
        return <WrappedComponent {...this.props}/>;
      }
    };
  };
}
