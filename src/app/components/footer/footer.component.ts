import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
	listItensOne:string[] = [
    'Suporte',
    'Política de privacidade',
    'Termos de uso do site',
    'Mapa do site',
    'PlayStation Studios',
    'Legal',
    'Sobre a SIE',
  ];

	listItensTwo: string[] = [
    'Termos de serviço da PSN',
    'Política de cancelamento da PS Store',
    'Avisos de saúde',
    'Sobre as classificações',
  ];


	listItensThree: string[] = [
		'Facebook',
		'Twitter',
		'YouTube',
		'Instagram',
		'Aplicativo para Android',
		'Aplicativo para iOS'
	];
}
