import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { IMAGESIZE } from '../../helpers/imageSize';
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

  @Input() movies  : Movie[] = []
  @Input() isBanner  : boolean = false;

  slideIndex : number = 0
  readonly imageSize = IMAGESIZE

  constructor() { }

  ngOnInit(): void {
    if(!this.isBanner){
      setInterval(()=>{
      if(this.slideIndex === this.movies.length-1)
        this.slideIndex = 0;
      else this.slideIndex++;
    },5000)
    }
  }

}
