import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>{{name}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

}
