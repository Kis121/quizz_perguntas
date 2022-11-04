import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameComponent} from "./components/game/game.component";
import {RouterModule, Routes } from '@angular/router';
import {QuestionDetailedComponent} from "./components/question-detailed/question-detailed.component";

const routes: Routes=[
  {path: '', redirectTo: '/game', pathMatch:'full'},
  {path: 'game', component: GameComponent},
  {path: 'question/:id', component: QuestionDetailedComponent}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
