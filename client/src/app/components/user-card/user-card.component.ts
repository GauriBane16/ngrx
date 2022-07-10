import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user:User;
  constructor(private repositoryService:RepositoryService) { }

  ngOnInit() {
  }

  deleteUser(id:number){
    console.log("Hi")
    debugger;
    this.repositoryService.deleteUser(id);
  }

}
