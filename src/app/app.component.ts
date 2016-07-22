import { Component } from '@angular/core';
import { RutComponent } from "./rut/rut.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    RutComponent,
  ]
})
export class AppComponent {
  title = 'app works!';
}
