import { Component, OnInit,Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {
  @Input() public dataFromParent;
  @Output() public PCCommEvent = new EventEmitter();
   public SendEvent()
  {
    this.PCCommEvent.emit('Hello Parent');
  }

  constructor() { }

  ngOnInit() {
  }

}
