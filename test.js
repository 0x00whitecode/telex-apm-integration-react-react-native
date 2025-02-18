// Importing functions from the compiled Telex APM package (make sure to adjust the import path if necessary)
const { monitorAppPerformance, logCustomEvent, trackComponentLifecycle, ErrorBoundary } = require('./dist'); // Adjust the path based on where your compiled files are located

// Simulating Telex webhook URL for testing purposes
const telexWebhookUrl = 'YOUR_TELEX_WEBHOOK_URL';

// Test 1: Test `monitorAppPerformance`
monitorAppPerformance({ telexWebhookUrl, interval: 5000 });  // Sends data every 5 seconds
console.log('App performance monitoring started');

// Test 2: Test `logCustomEvent`
logCustomEvent(telexWebhookUrl, { custom_event_data: 'Test event triggered' });
console.log('Custom event logged');

// Test 3: Test `trackComponentLifecycle` for component "TestComponent"
trackComponentLifecycle('TestComponent', telexWebhookUrl);
console.log('Component lifecycle tracking started');

// Test 4: Simulate ErrorBoundary (no actual React here, but you can simulate it for testing)
try {
  const errorBoundary = new ErrorBoundary();
  throw new Error('Test error');
} catch (error) {
  console.error('Simulating an error:', error);
}

console.log('Telex APM Integration test completed');