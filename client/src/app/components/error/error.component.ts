import { Component, Input, OnInit, Output } from '@angular/core';
import { TransitGatewayPropagationState } from 'aws-sdk/clients/ec2';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
@Output() reload= new EventEmitter();
@Input() errorTitle:string;
  constructor() { }

  ngOnInit() {
  }

  tryAgain(){
    this.reload.emit('Hi')
  }

 
}
