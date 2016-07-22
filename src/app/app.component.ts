import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators } from '@angular/common';
import { RutComponent } from './rut/rut.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    FORM_DIRECTIVES,
    RutComponent,
  ],
})
export class AppComponent {
  public title: string = 'app works!';
  public registrationForm: ControlGroup;
  public username: Control;
  public rut: Control;
  public submitAttempt: boolean;
  public myRut: string;

  constructor(private builder: FormBuilder) {
    this.username = new Control('', Validators.required);
    this.rut = new Control('', Validators.required);

    this.registrationForm = builder.group({
      username: this.username,
      rut: this.rut,
    });
  }

  public registerUser(user) {
    console.log(this.registrationForm.value);
    this.submitAttempt = true;
  }
}
