// Configuration file for API keys and settings
// Copy this file to config.local.js and add your actual API keys
// Make sure to add config.local.js to .gitignore

const config = {
  // Google Maps API Configuration
  GOOGLE_MAPS_API_KEY: 'AIzaSyBKtXgGgrjvWlXmLLa7yG8TFC9jKDUxzhs',
  
  // Add other API keys as needed
  // OPENAI_API_KEY: 'your_openai_api_key_here',
  // STRIPE_SECRET_KEY: 'your_stripe_secret_key_here',
  
  // Map Configuration
  DEFAULT_CENTER: { lat: 43.6532, lng: -79.3832 }, // Toronto
  DEFAULT_ZOOM: 13,
  
  // Search Configuration
  DEFAULT_KEYWORD: 'business'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}
