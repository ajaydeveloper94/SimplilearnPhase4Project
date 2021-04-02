import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../models/score';

@Component({
  selector: 'app-viewscore',
  templateUrl: './viewscore.component.html',
  styleUrls: ['./viewscore.component.css']
})
export class ViewscoreComponent implements OnInit {
  globalscore: any;
  
  constructor()
 {

  this.globalscore= GlobalVariable.globalscore;
  
  }

  ngOnInit(): void {
  }

}
