import { VendasCarrosService } from './services/vendas-carros.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vehicle-simulator';

  constructor(private vendaCarros: VendasCarrosService){}


}
