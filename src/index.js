import { fromEvent, scan, debounce } from "rxjs";

fromEvent(document, "click")
  .pipe(scan((count) => count + 1, 0))
  .pipe(
    debounce((count) => {
      setTimeout(() => {
        count;
      }, 1000);
    })
  )
  .subscribe((count) => console.log(`Clicked ${count} times`));
