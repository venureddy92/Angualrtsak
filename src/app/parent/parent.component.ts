import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  currentUser:User=this.clearInputData();
  updatedUser?:User;
  constructor() { }
  count = 0;

  ngOnInit(): void {
  }
  saveUserInfo(){
        this.updatedUser = JSON.parse(JSON.stringify(this.currentUser));
  }
  clearInputData(){
    this.count +=1;
    let defaultStr = "";
    if(this.count%2==0){
      defaultStr="";
    }
    var user = {"name":defaultStr,lastname:defaultStr,rolNum:defaultStr};
    return user;
  }
  recieveData(data:User){
      if(data){
        alert("user should enter unique role numbers");
      }else{
        alert("user data submitted success fully");
        this.currentUser=this.clearInputData();
      }
  }
}

export interface User{
  name:string,
  lastname:string,
  rolNum:string
}
