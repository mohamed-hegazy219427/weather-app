# Weather App

A responsive 3-day weather forecast app built with vanilla JavaScript using a clean **MVC architecture**, powered by [WeatherAPI.com](https://www.weatherapi.com/) and bundled with [Vite](https://vitejs.dev/).

## Features

- Search any city worldwide for a live weather forecast
- Choose 1, 2, or 3 days of forecast
- Displays temperature, condition, humidity, wind speed, and wind direction
- Fully responsive layout (Bootstrap 5)
- Cancels in-flight requests automatically on new searches (AbortController)
- User-friendly error and loading states

## Tech Stack

| Layer | Technology |
|---|---|
| Bundler | Vite |
| Styles | Bootstrap 5, Font Awesome 6, custom CSS |
| Language | Vanilla JS (ES2022) — private class fields, optional chaining, nullish coalescing |
| API | [WeatherAPI.com REST API](https://www.weatherapi.com/docs/) |
| Architecture | MVC (Model – View – Controller) |

## Project Structure

```
src/
├── config.js                   ← API key (env), base URL, defaults
├── main.js                     ← Entry point — composes & boots the app
├── services/
│   └── WeatherApiService.js    ← Raw fetch wrapper, AbortController
├── models/
│   ├── WeatherModel.js         ← App state + observer pattern
│   └── ForecastModel.js        ← Pure data transforms (API → view model)
├── views/
│   ├── ForecastView.js         ← Renders forecast table
│   ├── SearchView.js           ← Search input + dropdown events
│   └── AlertView.js            ← Error / info messages
├── controllers/
│   └── WeatherController.js    ← Wires model ↔ views, handles user actions
└── utils/
    ├── dateFormatter.js        ← Weekday / date helpers
    └── domHelpers.js           ← Type-safe querySelector wrappers
```

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/mohamed-hegazy219427/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example env file and add your API key:

```bash
cp .env.example .env
```

Edit `.env`:

```
VITE_API_KEY=your_weatherapi_key_here
```

Get a free key at [weatherapi.com](https://www.weatherapi.com/).

### 4. Run the dev server

```bash
npm run dev
```

Opens at `http://localhost:3000`.

### 5. Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Contributing

Found a bug or want a feature? Open an [issue](https://github.com/mohamed-hegazy219427/weather-app/issues) or submit a pull request.

## License

MIT
