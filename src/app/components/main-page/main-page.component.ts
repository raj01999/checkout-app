import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  providers: [DataService],
})
export class MainPageComponent {
  cartOpen: boolean = true;
  constructor(private dataService: DataService) {
    this.cartOpen = dataService.cartOpen;
  }

  onCartChange() {
    this.dataService.onCartChange();
    this.cartOpen = this.dataService.cartOpen;
  }
}
