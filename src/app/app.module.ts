import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionDetailedComponent } from './components/question-detailed/question-detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    QuestionDetailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
