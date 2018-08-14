import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AppSubjectService } from '../app-subject.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: number;
  act;

  constructor(private activateRoute: ActivatedRoute, private router: Router,
              private some: AppSubjectService ) { 
               
              }

  ngOnInit() {
    this.activateRoute.params
    .subscribe( (params: Params) =>{
      this.id = +params['id']
    })

    // this.some.userActivated
    // .subscribe( (value)  =>{
    //   this.act = value;
    // })
  }

  doSome(){
    this.router.navigate(['user', this.activateRoute.params['id']
  ])
  }
}
