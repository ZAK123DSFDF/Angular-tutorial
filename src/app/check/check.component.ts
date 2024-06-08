import { Component, OnInit, inject, input, model, output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-check',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './check.component.html',
  styles: ``,
})
export class CheckComponent implements OnInit {
  global = inject(GlobalService);
  id = input();
  router = inject(Router);
  route1 = inject(ActivatedRoute);
  title = input();
  check = input();
  count = model<number>();
  count1 = output<number>();
  changeCount() {
    this.count.update((v: any) => v + 1);
  }
  onSetCount() {
    this.count1.emit(5);
  }
  route() {
    this.router.navigate(['']);
  }
  ngOnInit() {
    if (this.id()) {
      console.log(this.id());
    }
    this.route1.queryParams.subscribe((params) => {
      const searchQuery = params['searchQuery'];
      if (searchQuery) {
        console.log(searchQuery);
      }
    });
  }
  incrementGlobal() {
    this.global.globalSignal.update((v) => v + 1);
  }
}
