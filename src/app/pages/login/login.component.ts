import { Component, inject, Input, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { AppComponent } from '../../app.component';
import { AppService } from '../../app.service';
import { category } from '../../app.model';
import { colectionComponent } from '../colection/colection.component';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';

@Component({
    selector: 'selector-name',
    templateUrl: 'login.component.html',
    imports:[TableModule,ButtonModule,RatingModule,TagModule,AppComponent,FormsModule],
    providers: [AppService]
})

export class loginComponent  {
    AppService = inject(AppService)
     getposts !: category
     colectionComponent !: category[]
     
     @Input() image!:string
     @Input() Stars!:any[]
     @Input() id!:number

     ngOnInit(): void {
       this.AppService.getcolectionComponent().subscribe({
         next: ((_res) => {
           this.colectionComponent = _res as category[]
          
        
         })
       })
   
 }

 handleDelete(id:number):void{
  this.colectionComponent=this.colectionComponent.filter(item => item.id !== id)
  }
}