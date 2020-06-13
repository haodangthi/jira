import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';
import { Board } from '../models/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  //@Input() taskItems: Task[];
  @Input() board: Board;
  // boardTitle = this.board.title;
  // boardItems: Task[] = this.board.items;

  constructor() { }

  ngOnInit(): void {
  }

}
