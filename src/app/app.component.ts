import { Component } from '@angular/core';

@Component({
  selector: 'nologig-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Euclid';

  // Rekursive
  euklid1(a, b) {
    if (b === 0) {
      return a;
    }
    if (a === 0) {
      return b;
    }
    if (a > b) {
      return this.euklid1(a - b, b);
    }
    return this.euklid1(a, b - a);
  }

  // Iterative
  euklid2(a, b) {
    if (a === 0) {
      return b;
    }

    while (b !== 0) {
      if (a > b) {
        a -= b;
        continue;
      }
      b -= a;
    }

    return a;
  }

  // Modern Variantions

  // Rekursive
  euklid3(a, b) {
    if (b === 0) {
      return a;
    }

    return this.euklid3(b, a % b);
  }

  // Iterative
  euklid4(a, b) {
    let tmp = 0;
    while (b !== 0) {
      tmp = a % b;
      a = b;
      b = tmp;
    }
    return a;
  }

}
