import View from "./View";

import { API_URL } from "../config";
import { AJAX } from "../helpers";
import previewView from "./previewView";

class PersonsView extends View {
  _parentElement = document.querySelector(".data");
  _errorMessage = "There is no person!";

  _generateMarkup() {
    return this._data
      .map((person) => previewView.render(person, false))
      .join("");
  }
}

export default new PersonsView();
