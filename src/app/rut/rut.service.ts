import { Injectable } from '@angular/core';

@Injectable()
export class RutService {
  public cleanRut(value: string) {
    return typeof value === 'string' ? value.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
  }

  public formatRut(value: string, defaultValue: string) {
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
