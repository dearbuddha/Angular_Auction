import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  @Input()
  private rating: number = 0;//输入属性

  stars: Array<boolean> = [];//boolean[];

  constructor() { }

  ngOnInit() {
    for(let i = 1; i <= 5; i++ ){
      this.stars.push( i > this.rating)
    }
  }

}
