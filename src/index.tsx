/* @refresh reload */
import { render } from "solid-js/web";
import { TransProvider } from "@mbarzda/solid-i18next";

import "./index.css";
import App from "./App";
import i18n from "./i18n";

const root = document.getElementById("root");

render(
  () => (
    <TransProvider instance={i18n}>
      <App />
    </TransProvider>
  ),
  root!
);
