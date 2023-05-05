import { fromEvent, throttleTime, map, scan } from "rxjs";

fromEvent(document, "click")
  .pipe(
    map((e) => e.clientX),
    throttleTime(1000),
    scan((count, value) => count + value, 0)
  )
  .subscribe((count) => console.log(`Clicked ${count} times`));
