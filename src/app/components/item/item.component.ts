import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGESIZE } from '../../helpers/imageSize';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item : Movie | null =  null;
  readonly imageSize = IMAGESIZE
  constructor() { }

  ngOnInit(): void {
  }

}
