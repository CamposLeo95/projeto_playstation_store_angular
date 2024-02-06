import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	pathsImagesGames:object[] = [
		{img:"assets/tekken8.jpg"},
		{img:"assets/gow-rag.jpg"},
		{img:"assets/pop-lc.jpg"},
		{img:"assets/lou-pt2.jpg"},
		{img:"assets/cyber.jpg"},
		{img:"assets/hogwarts.jpg"}
	]
	pathsImagesCategorys:string[] = [
		"assets/ps5.jpg",
		"assets/ps4.jpg",
		"assets/expancao.jpg",
		"assets/vr.jpg",
		"assets/ps-plus.jpg",
		"assets/control.jpg"
	]

}
