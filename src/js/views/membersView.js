import View from "./View";
import previewView from "./previewView";

class MembersView extends View {
  _parentElement = document.querySelector(".data");
  _errorMessage = "This house has no members!";

  _generateMarkup() {
    return this._data
      .map((member) => previewView.render(member, false))
      .join("");
  }

  renderMembers(house) {
    this._data = house.members;
    const markup = this._generateMarkup();

    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new MembersView();
