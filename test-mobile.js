#!/usr/bin/env node

/**
 * Mobile Functionality Test Script for PV Automation
 * 
 * This script tests the webhook endpoints and simulates mobile requests
 * to ensure everything is working correctly.
 */

const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:5678';
const WEBHOOK_URL = `${BASE_URL}/webhook/pvautomations-contact`;
const MOBILE_TEST_URL = `${BASE_URL}/mobile-test`;
const HEALTH_URL = `${BASE_URL}/health`;

// Test data
const testFormData = {
  name: "Test User",
  email: "test@example.com",
  organization: "Test Company",
  message: "This is a test message from the mobile test script",
  timestamp: new Date().toISOString(),
  source: "PV Automation Website - Mobile Test",
  device: "mobile",
  userAgent: "Mobile Test Script"
};

async function testEndpoint(url, data = null, method = 'GET') {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mobile Test Script'
      }
    };

    if (data && method !== 'GET') {
      options.body = JSON.stringify(data);
    }

    console.log(`\n🔍 Testing ${method} ${url}`);
    const response = await fetch(url, options);
    const responseData = await response.json();
    
    console.log(`✅ Status: ${response.status}`);
    console.log(`📊 Response:`, JSON.stringify(responseData, null, 2));
    
    return { success: response.ok, data: responseData };
  } catch (error) {
    console.error(`❌ Error testing ${url}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function runTests() {
  console.log('🚀 Starting Mobile Functionality Tests for PV Automation');
  console.log('=====================================================');

  // Test 1: Health Check
  console.log('\n📋 Test 1: Health Check');
  await testEndpoint(HEALTH_URL);

  // Test 2: Mobile Test Endpoint
  console.log('\n📋 Test 2: Mobile Test Endpoint');
  await testEndpoint(MOBILE_TEST_URL, { test: 'mobile' }, 'POST');

  // Test 3: Webhook Endpoint
  console.log('\n📋 Test 3: Webhook Endpoint');
  await testEndpoint(WEBHOOK_URL, testFormData, 'POST');

  // Test 4: View Messages
  console.log('\n📋 Test 4: View Messages');
  await testEndpoint(WEBHOOK_URL);

  // Test 5: Test with missing required fields
  console.log('\n📋 Test 5: Test with Missing Required Fields');
  await testEndpoint(WEBHOOK_URL, { name: "Test" }, 'POST');

  // Test 6: Test CORS headers
  console.log('\n📋 Test 6: CORS Headers Test');
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'OPTIONS',
      headers: {
        'Origin': 'http://localhost:8080',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type'
      }
    });
    
    console.log(`✅ CORS Preflight Status: ${response.status}`);
    console.log(`📊 CORS Headers:`);
    console.log(`   Access-Control-Allow-Origin: ${response.headers.get('Access-Control-Allow-Origin')}`);
    console.log(`   Access-Control-Allow-Methods: ${response.headers.get('Access-Control-Allow-Methods')}`);
    console.log(`   Access-Control-Allow-Headers: ${response.headers.get('Access-Control-Allow-Headers')}`);
  } catch (error) {
    console.error(`❌ CORS Test Error:`, error.message);
  }

  console.log('\n=====================================================');
  console.log('✅ Mobile functionality tests completed!');
  console.log('\n📱 To test on actual mobile device:');
  console.log('   1. Start your development server: npm run dev');
  console.log('   2. Start webhook server: node webhook-server.js');
  console.log('   3. Access from mobile using your computer\'s IP address');
  console.log('   4. Test the contact form submission');
}

// Run tests if this script is executed directly
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { runTests, testEndpoint };
