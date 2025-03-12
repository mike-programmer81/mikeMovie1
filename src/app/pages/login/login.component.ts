import { Component, inject, Input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { AppComponent } from '../../app.component';
import { AppService } from '../../app.service';
import { category } from '../../app.model';

@Component({
    selector: 'selector-name',
    templateUrl: 'login.component.html',
    imports:[TableModule,ButtonModule,RatingModule,TagModule,AppComponent]
})

export class loginComponent  {
    AppService = inject(AppService)
     getposts !: category
     colectionComponent !: category[]
     
     @Input() image!:string
     @Input() Stars!:any[]

     ngOnInit(): void {
       this.AppService.getcolectionComponent().subscribe({
         next: ((_res) => {
           this.colectionComponent = _res as category[]
        
        
         })
       })
   
 }
}