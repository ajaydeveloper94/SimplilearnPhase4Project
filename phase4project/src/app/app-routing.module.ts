import {Routes} from "@angular/router";
import { QuestionfiveComponent } from "./questionfive/questionfive.component";
import { QuestionfourComponent } from "./questionfour/questionfour.component";
import { QuestiononeComponent } from "./questionone/questionone.component";
import { QuestionthreeComponent } from "./questionthree/questionthree.component";
import { QuestiontwoComponent } from "./questiontwo/questiontwo.component";
import { ReviewansComponent } from "./reviewans/reviewans.component";
import { ViewscoreComponent } from "./viewscore/viewscore.component";
import { ViewtotalscoreComponent } from "./viewtotalscore/viewtotalscore.component";
export const applicationRoutes: Routes = [
    { path: '', redirectTo: 'question-one', pathMatch: 'full'},
    { path: 'question-one', component: QuestiononeComponent},
    { path: 'question-two', component: QuestiontwoComponent},
    { path: 'question-three', component:QuestionthreeComponent},
    { path: 'question-four', component: QuestionfourComponent},
    { path: 'question-five', component: QuestionfiveComponent},
    { path: 'reviewans', component: ReviewansComponent},
    { path: "viewtotalscore", component: ViewtotalscoreComponent, children: [
      { path: 'viewscore', component: ViewscoreComponent},
    ]}
 
];