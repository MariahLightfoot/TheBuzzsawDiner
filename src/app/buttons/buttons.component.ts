import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToGoogleMaps() {
    window.open("https://www.google.com/maps/dir//farmers+kitchen+desoto+mo/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x87d8e22b48c9cacf:0xab2e3288642b7d3b?sa=X&ved=2ahUKEwj3lvLLlLvmAhVIbs0KHXk-BVkQ9RcwDHoECBsQAw");
  }

  contactUs(){
    window.open("tel:+6362092406")
  }
}
