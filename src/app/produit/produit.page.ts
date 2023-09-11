import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProduitPage implements OnInit {


  constructor(
    private nvctrl: NavController
  ) { }
  ngOnInit() {
  }

  token = localStorage.getItem('token');
  go_details(pz:string) {
    localStorage.setItem('pztoken', pz);
    this.nvctrl.navigateForward('/details');
  }

}
