import View from "./View";

class SearchView extends View {
  _parentElement = document.querySelector(".search");
  _errorMessage = "Something went wrong!!!";

  getQuery() {
    const query = this._parentElement.querySelector(".search__field").value;
    this._parentElement.querySelector(".search__field").value = "";
    this._parentElement.querySelector(".search__field").blur();
    return query;
  }
}

export default new SearchView();
