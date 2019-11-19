import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapitre',
  templateUrl: './chapitre.component.html',
  styleUrls: ['./chapitre.component.css']
})
export class ChapitreComponent implements OnInit {
testcours1;

  constructor() { }
  getCours(){
    this.testcours1="ok";
  }
  getCours1(){
    this.testcours1="ok1";
  }
  getCours2(){
    this.testcours1="ok2";
  }
  ngOnInit() {
  }

}
