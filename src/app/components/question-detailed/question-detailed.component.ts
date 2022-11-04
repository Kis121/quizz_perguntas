import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from "../../question";
import {Questions} from "../../mock-question";

@Component({
  selector: 'app-question-detailed',
  templateUrl: './question-detailed.component.html',
  styleUrls: ['./question-detailed.component.css']
})
export class QuestionDetailedComponent implements OnInit {
  questionList: Question[] = Questions


  constructor(private _route: ActivatedRoute) { }

  question_id!: number;

  ngOnInit(): void {
    this.question_id = parseInt(<string>this._route.snapshot.paramMap.get('id'))
  }
  toggle = false;

  onClick(){
    this.toggle = true;
  }


}
