import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}
  globalSignal = signal(5);
  incrementGlobal() {
    this.globalSignal.update((v) => v + 1);
  }
}
