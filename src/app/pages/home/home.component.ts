import { Component } from '@angular/core';

interface GameProps {
	img: string
	game: string
	price: number
	plataform: string[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

	pathsImagesGames:GameProps[] = [
		{
			img:"assets/tekken8.jpg",
			game: "Tekken 8",
			price: 379.90,
			plataform: ["PS4", "PS5"]
		},
		{
			img:"assets/gow-rag.jpg",
			game: "God of War Ragnarok",
			price: 349.90,
			plataform: ["PS4", "PS5"]
		},
		{
			img:"assets/pop-lc.jpg",
			game: "Prince of Persia - The lost Crown",
			price: 279.90,
			plataform: ["PS4"]
		},
		{
			img:"assets/lou-pt2.jpg",
			game: "The Last of Us - Part II",
			price: 389.90,
			plataform: ["PS4", "PS5"]
		},
		{
			img:"assets/cyber.jpg",
			game: "Tekken 8",
			price: 349.90,
			plataform: ["PS4"]
		},
		{
			img:"assets/hogwarts.jpg",
			game: "Howgwarts Legacy",
			price: 349.90,
			plataform: ["PS4", "PS5"]
		},
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
