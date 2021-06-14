import { Component, OnInit } from '@angular/core';
import { flattenDiagnosticMessageText } from 'typescript';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides = {
    isHovered: false,
    imageUrl: null,
    data: [
      {
        title: 'Home Internet',
        imageUrl: 'http://www.bilingo.co.za/mtn-digital/assets/small-card.png',
      },
      {
        title: 'Add a Phone-line',
        imageUrl: 'http://www.bilingo.co.za/mtn-digital/assets/small-card.png',
      },
      {
        title: 'Get a device',
        imageUrl: 'http://www.bilingo.co.za/mtn-digital/assets/small-card.png',
      },
      {
        title: 'Upgrade',
        imageUrl: 'http://www.bilingo.co.za/mtn-digital/assets/small-card.png',
      },
      {
        title: 'Mobile Internet',
        imageUrl: 'http://www.bilingo.co.za/mtn-digital/assets/small-card.png',
      },
    ],
  };
  myStyles = {
    btn: {
      margin: '30px',
      minHeight: '50px',
      maxHeight: '50px',
      minWidth: '50px',
      maxWidth: '50px',
      borderRadius: '25px',
      backgroundColor: 'black',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px',
    },
    navSlide: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    midleBox: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    boxSlide: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10px',
    },
    mainSlide: {
      borderColor: 'rgba(0,0,0,.125)',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '15px',
      minHeight: '564px',
      maxHeight: '564px',
      minWidth: '456px',
      maxWidth: '456px',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10px',
      transition: 'all .8s ease-in-out',
      transformOrigin: 'left top',
      backgroundColor: '#fff',
    },
    normalSlide: {
      borderColor: 'rgba(0,0,0,.125)',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '15px',
      minHeight: '284px',
      maxHeight: '284px',
      minWidth: '216px',
      maxWidth: '216px',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10px',
      backgroundColor: '#fff',
    },
  };
  styles = {
    fontSize: '3em',
    backgroundColor: 'ivory',
    color: 'maroon',
    maxWidth: '300px',
  };
  constructor() {}

  ngOnInit(): void {}
  // Next card
  nextSlide() {
    let totalElement = this.slides.data.length;
    let index = totalElement - 1;
    let lastElement = this.slides.data[index];
    let tmp = [];
    tmp.push(lastElement);
    for (let i = 0; i < totalElement - 1; i++) {
      let el = this.slides.data[i];
      tmp.push(el);
    }
    this.slides.data = tmp;
    this.slides.isHovered = true;
    setTimeout(() => {
      this.slides.isHovered = false;
    }, 500);
  }
  // Previous card
  backSlide() {
    let totalElement = this.slides.data.length;
    let index = totalElement - 1;
    let firstElement = this.slides.data[0];
    let tmp = [];
    for (let i = 1; i < totalElement; i++) {
      let el = this.slides.data[i];
      tmp.push(el);
    }
    tmp.push(firstElement);
    this.slides.data = tmp;
    this.slides.isHovered = true;
    setTimeout(() => {
      this.slides.isHovered = false;
    }, 300);
  }
}
