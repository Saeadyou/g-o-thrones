import View from "./View";
import previewView from "./previewView";

// import { API_URL } from "../config";
// import { AJAX } from "../helpers";

class HousesView extends View {
  _parentElement = document.querySelector(".data");
  _errorMessage = "There is no house!";

  // addHandlerRender(handler) {
  //   window.addEventListener("popstate", handler);
  //   console.log('addHandlerRender-------------')
  // }

  _generateMarkup() {
    return this._data.map((house) => previewView.render(house, false)).join("");
  }
}

export default new HousesView();
