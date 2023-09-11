import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  ReactiveFormsModule
} from '@angular/forms';
import { IonicModule,AlertController,NavController } from '@ionic/angular';
import { CommandeService} from "../commande.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SignupPage implements OnInit {

  signupFrom: FormGroup=new FormGroup({
    prenom: new FormControl(""),
    nom: new FormControl(""),
    tel: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  });
  submitted = false;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private commandeService: CommandeService

  )
  { }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: "Information",
      message: "Inscription réussie",
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.back();
        }
      }]
    });
    await alert.present();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signupFrom.controls;
  }

  ngOnInit() {
    this.signupFrom=this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', Validators.required],
      tel: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
    });
  }

  public OnAddedUser() {
    this.submitted = true;
    if (this.signupFrom.invalid) {
      return;
    }
    else {
      let usersData = new FormData();
      usersData.append("prenom", this.signupFrom.value.prenom);
      usersData.append("nom", this.signupFrom.value.nom);
      usersData.append("tel", this.signupFrom.value.tel);
      usersData.append("email", this.signupFrom.value.email);
      usersData.append("password", this.signupFrom.value.password);
      this.commandeService.addUser(usersData);
      this.presentAlert();
    }
  }

}
