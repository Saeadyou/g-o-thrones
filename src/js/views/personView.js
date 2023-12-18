import View from "./View";

class PersonView extends View {
  _parentElement = document.querySelector(".data");
  _errorMessage = "This person has no details!";

  _generateMarkup() {
    return `
        <h3>${this._data.name}</h3>
        <h5>${this._data.house?.name || "Whitout house"}</h5>
        ${this._data.quotes.map((quote) => `<p>${quote}</p>`).join("")}
    `;
  }

  renderPerson(person) {
    this._data = person;
    const markup = this._generateMarkup();

    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new PersonView();
