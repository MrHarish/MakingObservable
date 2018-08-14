import {Component, NgModule,Input,ComponentFactory,ComponentRef, ComponentFactoryResolver, OnInit,ViewContainerRef, ChangeDetectorRef, TemplateRef, ViewChild, Output, EventEmitter} from '@angular/core'
import { DynamicComponent } from './dynamic/dynamic.component';
import { AppSubjectService } from './app-subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = "Some vital Information";

  @ViewChild('alertContainer', {read: ViewContainerRef}) container; 
  componentRef: ComponentRef<any>;
  constructor(private resolver: ComponentFactoryResolver,
              private some: AppSubjectService){}

  CreateComponent(value){ 
    // this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(DynamicComponent);
    console.log(factory);

    this.componentRef = this.container.CreateComponent(factory);

    this.componentRef.instance.type = value;

    this.componentRef.instance.output.subscribe(event => console.log(event));
  }
  ngOnInit(){}

  click(){
    this.some.userActivated.next(this.title);
    console.log(this.title)
  }


}
