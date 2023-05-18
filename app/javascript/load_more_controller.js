// load_more_controller.js
import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["name", "output"];
  /*
    const loadMoreElement = document.getElementById("load-more-button")
    let url = new URL(loadMoreElement.href);
    console.log(url);
    let pathArr = url.pathname.split('/');
    console.log(pathArr);
    const currentPageNum = Number(pathArr.pop());
    console.log(`currentPageNum: ${currentPageNum}`);
    const newPage = currentPageNum + 1;
    console.log(newPage);
    pathArr.push(newPage.toString());
    console.log(pathArr);
    url.pathname = pathArr.join('/');
    console.log(url);
    loadMoreElement.setAttribute('href', url);
    */

  updatePage() {
    console.log("HELLO!!!");
    this.outputTarget.href = `10`;
  }
}
