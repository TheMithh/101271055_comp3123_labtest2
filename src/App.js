import React from "react";
import WeatherApp from "./comps/WeatherApp";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>☀️ Gabriel Forecast</h1>
      </header>
      <main>
        <WeatherApp />
      </main>
      <footer className="app-footer">
        <p>Weather Explorer © 2024 | Gabriel Pais</p>
      </footer>
    </div>
  );
}
// const getBackgroundStyle = () => {
//   if (!weather) {
//     console.log("Default background applied");
//     return { backgroundColor: "#87CEEB" }; // Default blue sky
//   }

//   const condition = weather.weather[0].main.toLowerCase();
//   console.log("Weather Condition:", condition);

//   switch (condition) {
//     case "clear":
//       return { backgroundImage: "url('/assets/clear-sky.jpg')", backgroundSize: "cover", backgroundPosition: "center" };
//     case "clouds":
//       return { backgroundImage: "url('/assets/cloudy.jpg')", backgroundSize: "cover", backgroundPosition: "center" };
//     case "rain":
//       return { backgroundImage: "url('/assets/rain.jpg')", backgroundSize: "cover", backgroundPosition: "center" };
//     case "snow":
//       return { backgroundImage: "url('/assets/snow.jpg')", backgroundSize: "cover", backgroundPosition: "center" };
//     case "thunderstorm":
//       return { backgroundImage: "url('/assets/thunderstorm.jpg')", backgroundSize: "cover", backgroundPosition: "center" };
//     default:
//       console.log("Fallback to snow background");
//       return { backgroundImage: "url('/assets/snow.jpg')", backgroundSize: "cover", backgroundPosition: "center" };
//   }
// };

export default App;
