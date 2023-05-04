import { fromEvent } from "rxjs";
fromEvent(document, "click").subscribe((event) => {
  console.log(event);
});
