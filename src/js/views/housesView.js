import View from "./View";
import previewView from "./previewView";

class HousesView extends View {
  _parentElement = document.querySelector(".data");
  _errorMessage = "There is no house!";

  _generateMarkup() {
    return this._data.map((house) => previewView.render(house, false)).join("");
  }
}

export default new HousesView();
