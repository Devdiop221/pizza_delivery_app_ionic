import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormGroup,
  FormsModule,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  FormControl } from '@angular/forms';
import { IonicModule,AlertController,NavController } from '@ionic/angular';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {
  loginForm:FormGroup=new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });

  submitted = false;

  constructor(
    public alertController: AlertController,
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public commandeService: CommandeService
  )
   { }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: "Authentification réussie",
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
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
    });
  }


  public onSubmit(){
    this.submitted= true;
    if(this.loginForm.invalid){
      return;
    }
    if(this.submitted){
      let usersData = new FormData();
      usersData.append("email", this.loginForm.value.email);
      usersData.append("password", this.loginForm.value.password);
      this.commandeService.loginUser(usersData);
      this.presentAlert();

    }
  }

}
