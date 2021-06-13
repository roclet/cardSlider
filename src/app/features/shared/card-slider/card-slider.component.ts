import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss'],
  animations: [
    trigger('cardGallery', [
      state(
        'move',
        style({
          // opacity: 1
          transform: 'translateX(-100%)',
        })
      ),
      state(
        'stop',
        style({
          transform: 'translateX(-100%)',
        })
      ),
      transition('move => stop', animate('300ms', style({ opacity: 1 }))),
      transition('stop => move', animate('300ms', style({ opacity: 0 }))),
    ]),
  ],
})
export class CardSliderComponent implements OnInit {
  @Input() slides: any;
  @Input() myStyles: any;
  @Output() nextArrows$: EventEmitter<string> = new EventEmitter();
  @Output() backArrows$: EventEmitter<string> = new EventEmitter();
  position: string = '';

  constructor() {}

  ngOnInit(): void {}

  backSlide(newposition: string) {
    this.position = newposition;
    this.backArrows$.emit();
  }
  nextSlide(newposition: string) {
    this.position = newposition;
    this.nextArrows$.emit();
  }
}