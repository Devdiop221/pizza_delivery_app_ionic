import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  AbstractControl, FormControl, FormGroup,
} from '@angular/forms';
import { IonicModule,AlertController,NavController } from '@ionic/angular';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.page.html',
  styleUrls: ['./detail-commande.page.scss'],
  standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class DetailCommandePage implements OnInit {
  commandForm: FormGroup = new FormGroup({
    prenom : new FormControl(""),
    quantite: new FormControl(""),
    adresse: new FormControl(""),
  });

  submitted = false;

  constructor(
    public alertController: AlertController,
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public commandeService: CommandeService
  ) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: "Commande réussie",
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.navigateRoot(['/produit']);

        }
      }]
    });
    await alert.present();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.commandForm.controls;
  }

  ngOnInit() {
    this.commandForm=this.formBuilder.group({
      prenom: ['', Validators.required],
      quantite: ['', [Validators.required,Validators.minLength(1),]],
      adresse: ['', Validators.required],
    });
  }





  AddCommand(){
    this.submitted= true;
    if(this.commandForm.invalid){
      return;
    }
    if(this.submitted){
      let commandData = new FormData();
      commandData.append("prenom", this.commandForm.value.prenom);
      commandData.append("quantite", this.commandForm.value.quantite);
      commandData.append("adresse", this.commandForm.value.adresse);
      this.commandeService.addCommand(commandData);
      this.presentAlert();

    }
  }

}
