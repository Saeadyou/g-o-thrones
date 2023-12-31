import View from "./View";

import { API_URL } from "../config";
import { AJAX } from "../helpers";
import previewView from "./previewView";

class QuotesView extends View {
  _parentElement = document.querySelector(".data");
  _errorMessage = "There is no quote!";

  addHandlerRender(handler) {
    const updateButton = document.getElementById("updateButton");
    updateButton.addEventListener("click", handler);
  }

  _generateMarkup() {
    return `
    <h3 class="heading-3">Some Quotations</h3>
    ${this._data.map((quote) => previewView.render(quote, false)).join("")}
      <button id='updateButton' class="btn">Update quotations</button>
      `;
  }
}

export default new QuotesView();
