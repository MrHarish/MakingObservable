import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  signUpForm: FormGroup;
  forbiddenNames = ["Harish", "Rajeshwari"];

  genders = [
    "male",
    "female"
  ]

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username': new FormControl('', [Validators.required, this.forbiddenNamesfun.bind(this)]),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'gend': new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    })
  }

  OnSubmit(){
    console.log(this.signUpForm);
  }


  doAddHobbies(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
    console.log(control)
  }

  forbiddenNamesfun(control: FormControl) : {[s: string] : boolean}{
    if(this.forbiddenNames.indexOf(control.value) !== -1){
      return {"forbiddenNameEntered": true}
    }else{
      return null;
    }

}
  




}
