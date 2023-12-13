import View from "./View";

import { API_URL } from "../config";
import { AJAX } from "../helpers";

class PersonsView extends View {
  _parentElement = document.querySelector(".data");
  _errorMessage = "There is no person!";

  addHandlerRender(handler) {
    ["popstate", "DOMContentLoaded"].forEach((event) =>
      window.addEventListener(event, handler)
    );
  }

  _generateMarkup() {
    return 'Personsssssssssssssssss';
  }
}

export default new PersonsView();