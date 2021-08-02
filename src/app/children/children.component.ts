import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { User } from '../parent/parent.component';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  constructor() { }

  users:User[]=[];
  @Input() user?:User;
  @Output() sendParentData = new EventEmitter();
  ngOnInit(): void {
  }

  ngOnChanges(){
    // user != null,user !="", user != undefined
    if(this.user){
      //[1,2,3,4,5,6]=> filter(use => rol == 4); => [4]
       var user = this.users.filter(user => user.rolNum == this.user?.rolNum)[0];
       if(user){
          this.sendParentData.emit(user);
       }
       else{
         this.users.push(this.user);
         this.sendParentData.emit(null);
       }
    }
  }

}
