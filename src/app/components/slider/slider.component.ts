import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slide' , [
      state('void', style({opacity : 0}) ),
      transition('void =>  *', [animate('1s')]),
      transition('* =>  void', [animate('500ms')]),
    ])
  ]
})
export class SliderComponent implements OnInit {

  @Input() movies  : Movie[] = [];

  slideIndex : number = 0;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.slideIndex++;
    },2000)
  }

}
