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
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          width: '200px',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          width: '100px',
          opacity: 0.8,
        })
      ),
      transition('open => closed', [style({ opacity: 1 }), animate('1s')]),
      transition('closed => open', [style({ opacity: 1 }), animate('0.5s')]),
    ]),
  ],
})
export class CardSliderComponent implements OnInit {
  @Input() slides: any;
  @Input() myStyles: any;
  @Output() nextArrows$: EventEmitter<string> = new EventEmitter();
  @Output() backArrows$: EventEmitter<string> = new EventEmitter();
  isOpen = true;
  constructor() {}
  ngOnInit(): void {}

  backSlide() {
    this.isOpen = !this.isOpen;
    this.backArrows$.emit();
  }
  nextSlide() {
    this.isOpen = !this.isOpen;
    this.nextArrows$.emit();
  }
}
