import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariable } from '../models/score';

@Component({
  selector: 'app-questionone',
  templateUrl: './questionone.component.html',
  styleUrls: ['./questionone.component.css']
})
export class QuestiononeComponent implements OnInit {

  constructor(private _httpClient: HttpClient,private _router: Router) { }
  quest: any;
  selectedOption: any;
  score = GlobalVariable.score;
  globalscore: any;
  givenansone = GlobalVariable.givenansone;
  

  ngOnInit(): void {
    this._httpClient.get("http://localhost:3000/questions").subscribe(result => {
    this.quest = result;  
    console.log(result)
    console.log(this.quest);

  
  })
}

radioChangeHandler (event: any) {
  this.selectedOption = event.target.value;
  GlobalVariable.givenansone = this.selectedOption;
  this.givenansone = GlobalVariable.givenansone;
  
}


}
