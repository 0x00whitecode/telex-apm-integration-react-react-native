// src/utils/trackingHelper.ts
export function sendDataToTelex(telexWebhookUrl: string, data: object) {
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
  