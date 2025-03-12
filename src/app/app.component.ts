import { Component, inject, Input, input, OnInit, Output, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { category } from './app.model';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, JsonPipe],
  template: '<body><router-outlet></router-outlet></body>',
  providers: [AppService]
})
export class AppComponent {
  
}