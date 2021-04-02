import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../models/score';

@Component({
  selector: 'app-questiontwo',
  templateUrl: './questiontwo.component.html',
  styleUrls: ['./questiontwo.component.css']
})
export class QuestiontwoComponent implements OnInit {
  quest: any;
  selectedOption: any;
  score = GlobalVariable.score;
  globalscore: any;
  givenanstwo = GlobalVariable.givenanstwo;
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
    GlobalVariable.givenanstwo = this.selectedOption;
  this.givenanstwo = GlobalVariable.givenanstwo;
    
  
    }
   
}
