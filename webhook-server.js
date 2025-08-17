const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5678;

// Middleware
app.use(cors());
app.use(express.json());

// Store received messages (in memory for testing)
const receivedMessages = [];

// Webhook endpoint
app.post('/webhook/pvautomations-contact', (req, res) => {
  const message = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    ...req.body
  };
  
  receivedMessages.push(message);
  
  console.log('📨 New contact form submission received:');
  console.log('=====================================');
  console.log(`👤 Name: ${message.name}`);
  console.log(`📧 Email: ${message.email}`);
  console.log(`🏢 Organization: ${message.organization || 'Not provided'}`);
  console.log(`💬 Message: ${message.message}`);
  console.log(`⏰ Timestamp: ${message.timestamp}`);
  console.log(`🌐 Source: ${message.source}`);
  console.log('=====================================');
  
  // Send success response
  res.status(200).json({ 
    success: true, 
    message: 'Message received successfully',
    messageId: message.id
  });
});

// View all received messages
app.get('/webhook/pvautomations-contact', (req, res) => {
  res.json({
    totalMessages: receivedMessages.length,
    messages: receivedMessages
  });
});

// Clear all messages (for testing)
app.delete('/webhook/pvautomations-contact', (req, res) => {
  receivedMessages.length = 0;
  res.json({ message: 'All messages cleared' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Webhook server running on http://localhost:${PORT}`);
  console.log(`📝 Webhook endpoint: http://localhost:${PORT}/webhook/pvautomations-contact`);
  console.log(`👀 View messages: http://localhost:${PORT}/webhook/pvautomations-contact`);
  console.log(`🧹 Clear messages: DELETE http://localhost:${PORT}/webhook/pvautomations-contact`);
  console.log(`💚 Health check: http://localhost:${PORT}/health`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down webhook server...');
  process.exit(0);
});
