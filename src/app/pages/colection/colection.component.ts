import { Component, inject, Input, input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'colectionComponent',
    templateUrl: 'colection.component.html',
     imports:[ButtonModule,CardModule, CommonModule]
})

export class colectionComponent implements OnInit {
    
      
    @Input() poster!:string
    @Input() runtime!:string
    @Input() title:string | undefined 
    @Input() image!:string
    @Input() country!:string
    

    constructor() { }

    ngOnInit():void {}




    isvisible:boolean=false;
    buttonvisible:boolean=true;
  showInformation(){
      this.isvisible= !this.isvisible
      this.buttonvisible= !this.buttonvisible
  }
}