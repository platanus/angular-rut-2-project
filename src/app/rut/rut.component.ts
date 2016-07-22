import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ng2-rut',
  inputs: ['mode'],
  templateUrl: 'rut.component.html',
  styleUrls: ['rut.component.css'],
})
export class RutComponent implements OnInit {
  public modelValue: string;
  public viewValue: string;
  public mode: string;

  constructor() {
    this.mode = 'live';
  }

  public ngOnInit() {
    // TODO
  }

  public updateLive(value: string) {
    if (this.mode == 'live') {
      this.updateValue(value);
    }
  }

  public updateValue(value: string) {
    this.modelValue = this.cleanRut(value);
    this.viewValue = this.formatRut(value, null);
  }

  private cleanRut(value: string) {
    return typeof value === 'string' ? value.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
  }

  private formatRut(value: string, defaultValue: string) {
    value = this.cleanRut(value);

    if (!value) { return defaultValue; }
    if (value.length <= 1) { return value; }

    let result: string = value.slice(-4, -1) + '-' + value.substr(value.length - 1);
    for (let i: number = 4; i < value.length; i += 3) {
      result = value.slice(-3 - i, -i) + '.' + result;
    }
    return result;
  }
}
