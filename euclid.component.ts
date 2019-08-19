import { Component } from '@angular/core';

@Component({
  selector: 'nlg-euclid',
  templateUrl: './euclid.component.html',
  styleUrls: ['./euclid.component.scss']
})
export class EuclidComponent {
  
  title = 'Euclid';

  euclidRecursive(a, b) {
    if (b === 0) {
      return a;
    }
    if (a === 0) {
      return b;
    }
    if (a > b) {
      return this.euclidRecursive(a - b, b);
    }
    return this.euclidRecursive(a, b - a);
  }

  euklidIterative(a, b) {
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

  euclidModernRecursive(a, b) {
    if (b === 0) {
      return a;
    }

    return this.euclidModernRecursive(b, a % b);
  }

  euclidModernIterative(a, b) {
    let tmp = 0;
    while (b !== 0) {
      tmp = a % b;
      a = b;
      b = tmp;
    }
    return a;
  }

}
