import View from "./View";

class PersonView extends View {
  _parentElement = document.querySelector(".data");
  _errorMessage = "This person has no details!";
  _allPersons = [];

  _generateMarkup() {
    return `
        <h3>${this._data.name}</h3>
        <h5>${this._data.house?.name || "Whitout house"}</h5>
        ${this._data.quotes.map((quote) => `<p>${quote}</p>`).join("")}
        <button id="updateQuotes">Change quotations</button>
    `;
  }

  renderPerson(person, persons) {
    this._data = person;
    this._allPersons = persons;

    const markup = this._generateMarkup();

    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    document
      .getElementById("updateQuotes")
      .addEventListener("click", () => this.updateQuotes(this._data));
  }

  updateQuotes(person) {
    const persons = this._allPersons;
    const randomNumber = Math.floor(Math.random() * persons.length);
    const updatedPerson = persons[randomNumber];
    person = { ...person, quotes: updatedPerson.quotes };
    this.renderPerson(person, persons);
  }
}

export default new PersonView();
