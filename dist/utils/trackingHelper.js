"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendDataToTelex = sendDataToTelex;
// src/utils/trackingHelper.ts
function sendDataToTelex(telexWebhookUrl, data) {
    fetch(telexWebhookUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then(console.log)
        .catch(console.error);
}
