import { Component, Input } from '@angular/core';



interface GameProps {
	img: string
	game: string
	price: number
	plataform: string[]
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  @Input()
  games:GameProps[] = [];

	@Input()
	title:string = "Teste"

}
