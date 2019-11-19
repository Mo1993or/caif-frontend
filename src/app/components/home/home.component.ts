import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
blog="";
  constructor() { }
getBlog1(){
  this.blog="ok";
}
getBlog2(){
  this.blog="ok2";
}
getBlog3(){
  this.blog="ok3";
}
  ngOnInit() {
  }

}
