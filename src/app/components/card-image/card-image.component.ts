import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent {

	@Input()
	wImage:string = ""
	@Input()
	hImage: string = ""
	@Input()
	mTop:string = "15px"
	@Input()
	pathImg:string ='assets/ac-cover.jpg'

}
