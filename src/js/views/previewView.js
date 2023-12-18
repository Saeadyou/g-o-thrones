import View from "./View";

class PreviewView extends View {
  _parentElement = "";

  _generateMarkup() {
    if (this._data.house || this._data.house === null)
      return `
    <li class="item__name">
        <a href="/persons/${this._data.slug}" data-link>${this._data.name} -----> ${this._data.house?.name || '❌whithout house❌'}</a>
    </li>
`;

    return `
        <li class="item__name">
            <a href="/houses/${this._data.slug}" data-link>${this._data.name}</a>
        </li>
    `;
  }
}

export default new PreviewView();
