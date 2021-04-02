import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { applicationRoutes } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http"
import { MainComponent } from './main/main.component';
import { FormsModule } from "@angular/forms";
import { QuestiononeComponent } from './questionone/questionone.component';
import { QuestiontwoComponent } from './questiontwo/questiontwo.component';
import { QuestionthreeComponent } from './questionthree/questionthree.component';
import { QuestionfourComponent } from './questionfour/questionfour.component';
import { QuestionfiveComponent } from './questionfive/questionfive.component';
import { ViewscoreComponent } from './viewscore/viewscore.component';
import { ReviewansComponent } from './reviewans/reviewans.component';
import { ViewtotalscoreComponent } from './viewtotalscore/viewtotalscore.component'
@NgModule({
  declarations: [
    
    MainComponent,
    
    QuestiononeComponent,
    
    QuestiontwoComponent,
    
    QuestionthreeComponent,
    
    QuestionfourComponent,
    
    QuestionfiveComponent,
    
    ViewscoreComponent,
    
    ReviewansComponent,
    
    ViewtotalscoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(applicationRoutes,{
      anchorScrolling: 'enabled'})
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
