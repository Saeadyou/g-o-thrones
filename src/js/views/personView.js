import View from "./View";

class PersonView extends View {
  _parentElement = document.querySelector(".data");
  _errorMessage = "This person has no details!";
  _allPersons = [];

  _generateMarkup() {
    return `
        <h3 class="heading-3">${this._data.name}</h3>
        <h4 class="heading-4">House:</h4>
        <h5 class="heading-5">${this._data.house?.name || "Whitout house"}</h5>
        <h4 class="heading-4">Quotations:</h4>
        ${this._data.quotes
          .map((quote) => `<p class="item">${quote}</p>`)
          .join("")}
        <button id="updateQuotes" class="btn">Change quotations</button>
    `;
  }

  renderPerson(person, persons) {
    // Hide search field
    document.querySelector(".search__field").style.visibility = "hidden";

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
