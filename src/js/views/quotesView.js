import View from "./View";

import { API_URL } from "../config";
import { AJAX } from "../helpers";

class QuotesView extends View {
  _parentElement = document.querySelector(".data");
  _errorMessage = "There is no quote!";

  addHandlerRender(handler) {
    ["popstate", "DOMContentLoaded"].forEach((event) =>
      window.addEventListener(event, handler)
    );
  }

  _generateMarkup() {
    return "Quotesssssssssssssssss";
  }
}

export default new QuotesView();
