import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../models/score';

@Component({
  selector: 'app-viewtotalscore',
  templateUrl: './viewtotalscore.component.html',
  styleUrls: ['./viewtotalscore.component.css']
})
export class ViewtotalscoreComponent implements OnInit {

  totalglobalscore: any;
  givenansone: any;
  givenanstwo: any;
  givenansthree: any;
  givenansfour: any;
  givenansfive: any;
  globalscore: any;
  constructor(private _httpClient: HttpClient) { 
    this.givenansone = GlobalVariable.givenansone;
    this.givenanstwo = GlobalVariable.givenanstwo;
    this.givenansthree = GlobalVariable.givenansthree;
    this.givenansfour = GlobalVariable.givenansfour;
    this.givenansfive = GlobalVariable.givenansfive;
    this.globalscore= GlobalVariable.globalscore;
  }
  quest: any;
  selectedOption: any;
  score = GlobalVariable.score;
  i: any;
 answers: string[] = [GlobalVariable.givenansone, GlobalVariable.givenanstwo, GlobalVariable.givenansthree, GlobalVariable.givenansfour, GlobalVariable.givenansfive];

  
  ngOnInit(): void {

    this._httpClient.get("http://localhost:3000/answer").subscribe(result => {
    this.quest = result; 
    console.log(this.globalscore); 
  })

  
  }
  
  myScore () {
    GlobalVariable.globalscore =0 ;
    this.globalscore = GlobalVariable.globalscore;
    
    for (this.i = 0; this.i<=4; this.i++)
    {
      
      if(this.answers[this.i]==this.quest[this.i].answer)
      {
        this.score = this.score+1;
        this.globalscore = this.globalscore+1;
        GlobalVariable.globalscore = this.globalscore;
        console.log("Right Answer");
        console.log("Score:" +this.score);
        console.log("Global Score:" +this.globalscore);
      }else
      {
        this.score =0;
        console.log("Wrong Answer");
        console.log("Score:" +this.score);
        console.log("Global Score:" +this.globalscore);
      }
    }
   
    }
}
