import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit {
  pzToken: any;
  token_pl: any;

  pizzasList = [
    { id: "Pizza Margherita", prix: 2500, imgUrl: '../../assets/icon/pizza1.jpg',description: "Une délicieuse pizza classique avec de la sauce tomate, de la mozzarella et du basilic." },
    { id: "Pizza Pepperoni", prix: 3500,imgUrl: '../../assets/icon/pizza2.jpg',description: "Une pizza garnie de pepperoni épicé et de fromage fondant."},
    { id: "Pizza Végétarienne", prix: 6500, imgUrl: '../../assets/icon/pizza3.jpg' ,description: "Une pizza chargée de légumes frais comme les poivrons, les champignons et les olives."},
    { id: "Pizza Hawaïenne", prix: 7000, imgUrl: '../../assets/icon/pizza4.jpg',description: "La controversée pizza hawaïenne avec du jambon et de l'ananas."},
    { id: "Pizza Quatre Fromages", prix: 8000,imgUrl: '../../assets/icon/pizza5.jpg',description: "Une combinaison savoureuse de quatre fromages différents sur une pâte croustillante." },
    { id: "Pizza Calzone", prix: 5500 ,imgUrl: '../../assets/icon/pizza6.jpg',description: "Une pizza repliée en demi-lune, remplie de vos garnitures préférées."},
    { id: "Pizza Méditerranéenne", prix: 6500,imgUrl: '../../assets/icon/pizza7.jpg', description: "Inspirée des saveurs méditerranéennes avec des olives, de la feta et des légumes grillés." }
  ];

  constructor() { }

  ngOnInit() {
    this.pzToken = localStorage.getItem('pztoken');
    this.token_pl = localStorage.getItem('token_pl');
  }

  // add commande


}
