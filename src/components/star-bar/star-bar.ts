import {Component} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'star-bar',
  templateUrl: 'star-bar.html'
})
export class StarBarComponent {

  stars: any;

  @Input()
  set setScore(score: number){
    this.stars = [];
    for (var i = 0; i < 5; i++) {
      if (score > i) {
        this.stars.push('star');
      } else {
        this.stars.push('star-outline');
      }
    }
  }

  constructor() {

  }
}
