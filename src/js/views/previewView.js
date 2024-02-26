import View from "./View";

class PreviewView extends View {
  _parentElement = "";

  _generateMarkup() {
    if (this._data.house || this._data.house === null)
      // Persons route
      return `
      <li class="item">
        <span class="item__name">
          <a href="/persons/${this._data.slug}" data-link>${this._data.name}</a>
        </span>
        <span class='item__house'>
          ${this._data.house?.name || "❌without house❌"}
        </span>
      </li>
      `;

    if (location.pathname === "/quotes")
      // Quotes route
      return `
      <li class="item">
      ${this._data.sentence}
      </li>
      `;

    if (location.pathname.includes("/houses/"))
      // Members of a house route
      return `
      <li class="item">
      ${this._data.name}
      </li>
      `;

    // Houses route
    return `
      <li class="item">
        <a href="/houses/${this._data.slug}" data-link>${this._data.name}</a>
      </li>
    `;
  }
}

export default new PreviewView();
