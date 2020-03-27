import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'app/models/user.model';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.styl']
})
export class UserDataComponent implements OnInit {

  @Input() user: IUser;
  
  constructor() { }

  ngOnInit(): void {
  }

}
