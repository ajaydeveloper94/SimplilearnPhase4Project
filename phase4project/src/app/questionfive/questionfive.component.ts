import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../models/score';

@Component({
  selector: 'app-questionfive',
  templateUrl: './questionfive.component.html',
  styleUrls: ['./questionfive.component.css']
})
export class QuestionfiveComponent implements OnInit {
  quest: any;
  selectedOption: any;
  score = GlobalVariable.score;
  globalscore: any;
  givenansfive = GlobalVariable.givenansfive;
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
    GlobalVariable.givenansfive = this.selectedOption;
  this.givenansfive = GlobalVariable.givenansfive;
    
    }
}
