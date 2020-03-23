import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-fav-button',
  templateUrl: './fav-button.component.html',
  styleUrls: ['./fav-button.component.css'],
  animations: [
    trigger('heart', [
      state(
        'unliked',
        style({
          color: '#fff',
          opacity: '0.5',
          transform: 'scale(1)'
        })
      ),
      state(
        'liked',
        style({
          color: '#ff0080',
          opacity: '1',
          transform: 'scale(1.2)'
        })
      ),
      transition('unliked <=> liked', animate('200ms ease-out'))
    ])
  ]
})
export class FavButtonComponent implements OnInit {
  likeState = 'unliked';
  iconName = 'heart-empty';

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  toggleLikeState() {
    if (this.likeState === 'unliked' && history.state.data && history.state.data.username) {
      this.likeState = 'liked';
      this.iconName = 'heart';
      this.snackBar.open('Succesfully added to favourites', 'Dismiss');
    } else if (this.likeState === 'liked' && history.state.data && history.state.data.username) {
      this.likeState = 'unliked';
      this.iconName = 'heart-empty';
      this.snackBar.open('Successfully removed from favourites', 'Dismiss');
    } else {
      this.likeState = 'unliked';
      this.iconName = 'heart-empty';
      this.snackBar.open('Please log in to your account in order to execute this acction', 'Dismiss');
    }
 }
}
