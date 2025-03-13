import {  Component, inject, Input, input, OnInit, Output, output} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { JsonPipe } from '@angular/common';
import { AppService } from '../../app.service';
import { category } from '../../app.model';
import { colectionComponent } from '../colection/colection.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe,colectionComponent, CommonModule,ButtonModule,CardModule],
  templateUrl: 'home.component.html',
  
  providers: [AppService]
 })
export class AppComponent implements OnInit {
  AppService = inject(AppService)
  getposts !: category
  colectionComponent !: category[]
  
  @Input() image!:string
  ngOnInit(): void {
    this.AppService.getcolectionComponent().subscribe({
      next: ((_res) => {
        this.colectionComponent = _res as category[]
        
     
      })
    })

    
  }
  openIndex: number | null = null;
  isvisible:boolean=false;
  buttonvisible:boolean=true;
showInformation(index: number){
    this.isvisible= !this.isvisible
    this.buttonvisible= !this.buttonvisible
    this.openIndex = this.openIndex === index ? null : index;
}
}