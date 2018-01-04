import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import  {Goal} from '../goal';
@Component({
  selector: 'app-goals-details',
  templateUrl: './goals-details.component.html',
  styleUrls: ['./goals-details.component.css']
})
export class GoalsDetailsComponent implements OnInit {
  @Input() goal:Goal
  @Output() isComplete = new EventEmitter<boolean>();

goalDelete(complete:boolean){
  this.isComplete.emit(complete);
}

  constructor() { }

  ngOnInit() {
  }

}
