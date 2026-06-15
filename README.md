# Weather App

A responsive 3-day weather forecast app built with vanilla JavaScript using a clean **MVC architecture**, powered by [WeatherAPI.com](https://www.weatherapi.com/) and bundled with [Vite](https://vitejs.dev/). A focused demonstration that framework-free JavaScript, written with real architecture, can still be fast, maintainable, and production-ready.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![WeatherAPI](https://img.shields.io/badge/WeatherAPI-0a9396?style=for-the-badge&logo=icloud&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

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

## 👨‍💻 Developer

**Mohamed Hegazy** — Full-Stack & Mobile Developer (MERN · React Native · Next.js · NestJS)

I build fast, scalable, and beautiful web & mobile applications — from framework-free apps with clean architecture like this one to full-stack platforms with React, Next.js, and NestJS. With 2+ years shipping production apps for startups and enterprises, I care deeply about clean code, performance, and maintainability.

| | |
|---|---|
| 🌐 Portfolio | [mohamedhegazy.netlify.app](https://mohamedhegazy.netlify.app/) |
| 💼 LinkedIn | [mohamed-hegazy-134109179](https://www.linkedin.com/in/mohamed-hegazy-134109179/) |
| 🐙 GitHub | [@mohamed-hegazy219427](https://github.com/mohamed-hegazy219427) |
| 📧 Email | [mohamedhegazy219427@gmail.com](mailto:mohamedhegazy219427@gmail.com) |
| 💬 WhatsApp | [+20 112 579 8366](https://wa.me/201125798366) |

> 💡 **Available for freelance projects and collaborations** — let's build something great together.

---

## License

MIT
