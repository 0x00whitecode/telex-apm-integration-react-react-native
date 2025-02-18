"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackComponentLifecycle = trackComponentLifecycle;
// src/componentTracking.ts
const react_1 = require("react");
const trackingHelper_1 = require("./utils/trackingHelper");
function trackComponentLifecycle(telexWebhookUrl) {
    return function withComponentTracking(WrappedComponent) {
        return class extends react_1.Component {
            componentDidMount() {
                (0, trackingHelper_1.sendDataToTelex)(telexWebhookUrl, {
                    event_name: 'component_mount',
                    message: `${WrappedComponent.name} mounted`,
                    status: 'success',
                    component: WrappedComponent.name,
                    timestamp: new Date().toISOString(),
                });
            }
            componentDidUpdate() {
                (0, trackingHelper_1.sendDataToTelex)(telexWebhookUrl, {
                    event_name: 'component_update',
                    message: `${WrappedComponent.name} updated`,
                    status: 'success',
                    component: WrappedComponent.name,
                    timestamp: new Date().toISOString(),
                });
            }
            componentWillUnmount() {
                (0, trackingHelper_1.sendDataToTelex)(telexWebhookUrl, {
                    event_name: 'component_unmount',
                    message: `${WrappedComponent.name} unmounted`,
                    status: 'success',
                    component: WrappedComponent.name,
                    timestamp: new Date().toISOString(),
                });
            }
            render() {
                return Object.assign({}, this.props);
            }
        };
    };
}
