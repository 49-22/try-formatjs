import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function loadLocaleData(locale) {
  switch (locale) {
    case "fr":
      return import("./translations/locales/fr.json");
    case "nl":
      return import("./compiled-lang/nl.json");
    default:
      return import("./compiled-lang/en.json");
  }
}

async function bootstrapApplication(locale, mainDiv) {
  const messages = await loadLocaleData(locale);
  ReactDOM.render(
    <React.StrictMode>
      <App locale={locale} messages={messages} />
    </React.StrictMode>,
    document.getElementById("root")
  );
  // ReactDOM.render(<App locale={locale} messages={messages} />, mainDiv);
}

bootstrapApplication('fr');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
