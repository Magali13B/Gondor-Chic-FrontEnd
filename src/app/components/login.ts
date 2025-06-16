import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Userservice } from '../services/userservice';
import { RouterModule, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: '../templates/login.html',
  styleUrl: '../styles/login.css'
})
export class Login implements OnInit {
   user = { email: '', mdp: '' };

  constructor(private userService: Userservice, private router: Router) {}

  ngOnInit(): void {
  }
onLogin() {
  this.userService.login(this.user).subscribe({
    next: (response: any) => {
      if (response && response.token) {
        localStorage.setItem('token', response.token);
        const userDetails = this.userService.getUserIdFromToken();

        if (userDetails && userDetails.id) {
          this.userService.getById(userDetails.id).subscribe({
            next: (user) => {
            console.log('Infos utilisateur complètes:', user);
             this.router.navigate(['/acceuil']);
            },
            error: (err) => {
              console.error('Erreur récupération info utilisateur:', err);
              alert('Impossible de récupérer les infos utilisateur.');
            }
          });
        } else {
          alert('Id utilisateur non trouvé dans le token.');
        }
      } else {
        alert('Erreur: Pas de token reçu du serveur');
      }
    },
    error: (err) => {
      console.error('Erreur de connexion:', err);
      alert('Échec de connexion: ' + (err.error?.message || err.message || 'Erreur inconnue'));
    }
  });
}
}

