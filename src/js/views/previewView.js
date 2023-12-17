import View from "./View";

class PreviewView extends View {
  _parentElement = "";

  _generateMarkup() {
    return `
        <li class="house__name">
            <a href="/houses/${this._data.slug}" data-link>${this._data.name}</a>
        </li>
    `;
  }
}

export default new PreviewView();
