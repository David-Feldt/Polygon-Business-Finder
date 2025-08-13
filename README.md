# Andrea Map - Business Search Application

A web application that allows users to draw polygons on a map and search for businesses within those areas using Google Maps API.

## Setup

### 1. API Keys Configuration

This application requires a Google Maps API key to function. Follow these steps to set up your API keys:

1. **Get a Google Maps API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the following APIs:
     - Maps JavaScript API
     - Places API
     - Drawing API
     - Geometry API
   - Create credentials (API Key)
   - Restrict the API key to your domain for security

2. **Configure Your API Key:**
   - Copy `config.local.js` from `config.js`
   - Replace `YOUR_ACTUAL_GOOGLE_MAPS_API_KEY` with your actual Google Maps API key
   - Save the file

### 2. File Structure

```
andrea-map/
├── index.html          # Main application file
├── config.js           # Configuration template
├── config.local.js     # Your local configuration with API keys (not in git)
├── .gitignore          # Git ignore file
└── README.md           # This file
```

### 3. Security Notes

- **Never commit your actual API keys to version control**
- The `config.local.js` file is already added to `.gitignore`
- Keep your API keys secure and restrict them to your domain

## Usage

1. Open `index.html` in a web browser
2. Draw a polygon on the map using the drawing tools
3. The application will automatically search for businesses within the drawn area
4. Click "Download CSV" to export the business data

## Features

- Interactive map with drawing tools
- Business search within custom polygons
- Export results to CSV format
- Configurable search parameters
- Responsive design

## API Requirements

- **Google Maps JavaScript API** - For map display and interaction
- **Google Places API** - For business search functionality
- **Google Drawing API** - For polygon drawing tools
- **Google Geometry API** - For spatial calculations

## Troubleshooting

- **Map not loading:** Check that your Google Maps API key is correct and has the required APIs enabled
- **No search results:** Ensure the Places API is enabled and your API key has the necessary permissions
- **Drawing tools not working:** Verify that the Drawing API is enabled in your Google Cloud Console

## License

This project is for educational and personal use. Please ensure compliance with Google Maps API terms of service.
