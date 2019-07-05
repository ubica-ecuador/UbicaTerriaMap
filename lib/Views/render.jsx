import ReactDOM from "react-dom";
import RedBox from "redbox-react";
import React from "react";
import i18n from "../locale/i18n";
import { I18nextProvider } from "react-i18next";

export default function renderUi(terria, allBaseMaps, viewState) {
  let render = () => {
    const UI = require("./UserInterface").default;
    ReactDOM.render(
      <I18nextProvider i18n={i18n}>
        <UI terria={terria} allBaseMaps={allBaseMaps} viewState={viewState} />
      </I18nextProvider>,

      document.getElementById("ui")
    );
  };

  if (module.hot && process.env.NODE_ENV !== "production") {
    // Support hot reloading of components
    // and display an overlay for runtime errors
    const renderApp = render;
    const renderError = error => {
      console.error(error);
      console.error(error.stack);
      ReactDOM.render(<RedBox error={error} />, document.getElementById("ui"));
    };
    render = () => {
      try {
        renderApp();
      } catch (error) {
        renderError(error);
      }
    };
    module.hot.accept("./UserInterface", () => {
      setTimeout(render);
    });
  }

  render();
}
