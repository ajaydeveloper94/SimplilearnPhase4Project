import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reviewans',
  templateUrl: './reviewans.component.html',
  styleUrls: ['./reviewans.component.css']
})
export class ReviewansComponent implements OnInit {
 
  constructor(private _httpClient: HttpClient)
  {

  }

 
  ngOnInit(): void {

  }


  
}
