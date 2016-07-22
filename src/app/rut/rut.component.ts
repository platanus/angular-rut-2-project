import { Component } from '@angular/core';
import { RutService } from './rut.service';
import { RutPipe } from './rut.pipe';

@Component({
  moduleId: module.id,
  selector: 'ng2-rut',
  inputs: ['mode'],
  providers: [RutService],
  pipes: [RutPipe],
  templateUrl: 'rut.component.html',
  styleUrls: ['rut.component.css'],
})
export class RutComponent {
  public modelValue: string;
  public viewValue: string;
  public mode: string;
  private srv: RutService;

  constructor(
    rutService: RutService
  ) {
    this.mode = 'live';
    this.srv = rutService;
  }

  public updateLive(value: string) {
    if (this.mode === 'live') {
      this.updateValue(value);
    }
  }

  public updateValue(value: string) {
    this.modelValue = this.srv.cleanRut(value);
    this.viewValue = this.srv.formatRut(value, null);
  }
}
