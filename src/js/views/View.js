export default class View {
  _data;

  render(data, render = true) {
    const searchField = document.querySelector(".search__field");
    if (data.members || data.quotes) this._showSearchField(searchField);
    else this._hideSearchField(searchField);

    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError;

    this._data = data;
    const markup = this._generateMarkup();
    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _hideSearchField(searchField) {
    searchField.style.visibility = "hidden";
  }

  _showSearchField(searchField) {
    searchField.style.visibility = "visible";
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderError(message = this._errorMessage) {
    const markup = `
        <div class='error'>
            <p>${message}</p>
        </div>
    `;
  }
}
