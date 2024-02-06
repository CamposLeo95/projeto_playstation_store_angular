import { Component, Input } from '@angular/core';

interface Games {
	img: string
}

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent {

	@Input()
	listGames:Games[] = []

}
