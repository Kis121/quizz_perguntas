import { Component, OnInit } from '@angular/core';
import {Question} from "../../question";
import {Questions} from "../../mock-question";
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  questionList: Question[] = Questions

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  onClick(id: any){
    this._route.navigate(['/question', id])
  }

}
