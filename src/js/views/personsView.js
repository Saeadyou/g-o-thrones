import View from "./View";

import { API_URL } from "../config";
import { AJAX } from "../helpers";
import previewView from "./previewView";

class PersonsView extends View {
  _parentElement = document.querySelector(".data");
  _errorMessage = "There is no person!";

  _generateMarkup() {
    return `
    <h3 class="heading-3">List of Persons</h3>
    ${this._data.map((person) => previewView.render(person, false)).join("")}
      `;
  }
}

export default new PersonsView();
