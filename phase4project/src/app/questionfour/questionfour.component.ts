import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../models/score';

@Component({
  selector: 'app-questionfour',
  templateUrl: './questionfour.component.html',
  styleUrls: ['./questionfour.component.css']
})
export class QuestionfourComponent implements OnInit {
  quest: any;
  selectedOption: any;
  score = GlobalVariable.score;
  globalscore: any;
  givenansfour = GlobalVariable.givenansfour;
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
    GlobalVariable.givenansfour = this.selectedOption;
  this.givenansfour = GlobalVariable.givenansfour;
    
  
    }

}
