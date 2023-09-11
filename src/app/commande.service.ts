import { Injectable } from '@angular/core';
import { AlertController, NavController,ToastController, LoadingController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  userData: any;
  commandData: any;

  constructor(
    public alertController: AlertController,
    public navCtrl: NavController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private http: HttpClient
  ) { }

  public loginUser(userData: any) {
    this.http.post('http://localhost:80/api_senpizza/senpizzaIdentification.php', userData).subscribe(
      (res: any) => {
        if (res.success == true) {

          // get user data
          const token = res.id_user;
          const token_prenom = res.prenom;
          const token_nom = res.nom;
          const token_email = res.email;
          const token_tel = res.tel;

          // set token property
          localStorage.setItem("token", token);
          localStorage.setItem("token_prenom", token_prenom);
          localStorage.setItem("token_nom", token_nom);
          localStorage.setItem("token_email", token_email);
          localStorage.setItem("token_tel", token_tel);

          this.loadingController.dismiss();
          this.navCtrl.navigateRoot(['/home']);
        }
        else {
          this.loadingController.dismiss();
          this.toastController.create({
            message: "Email ou mot de passe incorrect",
            duration: 3000
          }).then((toast) => {
            toast.present();
          });
        }
      });
  }

  public addUser(UserData: any){
    this.http.post('http://localhost:80/api_senfleur/senfleurInscription.php', UserData).subscribe(
      (res: any) => {
        if (res.success == true) {
          // get user data
          const token = res.id_user;
          const token_prenom = res.prenom;
          const token_nom = res.nom;
          const token_email = res.email;
          const token_tel = res.tel;

          // set token property
          localStorage.setItem("token", token);
          localStorage.setItem("token_prenom", token_prenom);
          localStorage.setItem("token_nom", token_nom);
          localStorage.setItem("token_email", token_email);
          localStorage.setItem("token_tel", token_tel);
          this.loadingController.dismiss();
          this.navCtrl.navigateRoot(['/login']);
        }
        else {
          this.loadingController.dismiss();
          this.toastController.create({
            message: "Erreur lors de l'inscription",
            duration: 3000
          }).then((toast) => {
            toast.present();
          });
        }
      })
  }

  public addCommand(commandData: any){
    this.http.post('http://localhost:80/api_senpizza/senpizzaCommande.php', commandData).subscribe(
      (res: any) => {
        if (res.success == true) {

          // get commande data
          const token = res.id_user;
          const token_commande = res.id_command;
          const token_quantite = res.quantite;
          const token_prenom = res.prenom;
          const token_adresse = res.adresse;


          // set token property
          localStorage.setItem("token", token);
          localStorage.setItem("token_commande", token_commande);
          localStorage.setItem("token_quantite", token_quantite)
          localStorage.setItem("token_prenom", token_prenom);
          localStorage.setItem("token_adresse", token_adresse);

          this.loadingController.dismiss();
          this.navCtrl.navigateRoot(['/produit']);
        }
        else {
          this.loadingController.dismiss();
          this.toastController.create({
            message: "Something went wrong",
            duration: 3000
          }).then((toast) => {
            toast.present();

          });
        }
      }
    )
  }
}
