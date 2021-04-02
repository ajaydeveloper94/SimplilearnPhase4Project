import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../models/score';

@Component({
  selector: 'app-questionthree',
  templateUrl: './questionthree.component.html',
  styleUrls: ['./questionthree.component.css']
})
export class QuestionthreeComponent implements OnInit {

  quest: any;
  selectedOption: any;
  globalscore:any
  score = GlobalVariable.score;
  givenansthree = GlobalVariable.givenansthree;
  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {

    this._httpClient.get("http://localhost:3000/questions").subscribe(result => {
      this.quest = result;  
      console.log(result)
      console.log(this.quest);
  
    
    })
  }

  radioChangeHandler (event: any) {
    this.selectedOption = event.target.value;
    GlobalVariable.givenansthree = this.selectedOption;
  this.givenansthree = GlobalVariable.givenansthree;
    
    }
}
