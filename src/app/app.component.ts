import {
  Component,
  OnInit,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterOutlet } from '@angular/router';
import { CheckComponent } from './check/check.component';
import { GlobalDirective } from './directives/global.directive';
import { FetchService } from './services/fetch.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CheckComponent, GlobalDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = signal<string>('angular-tutorial');
  fetch = inject(FetchService);
  fetch1 = signal<any>(null);
  constructor() {
    effect(() => {
      console.log(`this is the changed value of count ${this.count()}`);
    });
    effect(() => {
      console.log(`this is the changed value of count ${this.count3()}`);
    });
  }
  isChecked = signal<boolean>(false);
  names = signal([1, 2, 3]);
  count = signal<number>(0);
  count2 = computed(() => this.count() * 2);
  count3 = signal<number>(5);
  countChange() {
    this.count.update((v) => v + 1);
  }
  countChange3() {
    this.count3.update((v) => v + 3);
  }
  onCount(event: any) {
    console.log(event);
  }
  ngOnInit() {
    this.fetch.fetch().subscribe({
      next: (response: any) => {
        this.fetch1.set(response);
      },
      error: (err: any) => {
        console.log('error fetching the data');
      },
    });
  }
}
