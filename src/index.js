import { fromEvent, scan } from "rxjs";
fromEvent(document, "click")
  .pipe(scan((acc, value, index) => index + 1, 0))
  .subscribe((value) => {
    console.log(`clicked ${value} times`);
  });
