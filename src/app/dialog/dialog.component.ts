import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
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

export class DialogComponent {
 url;
 videoUrl;
 likeState = 'unliked';
 iconName = 'heart-empty';

  constructor(private sanitizer: DomSanitizer,
              public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,  private snackBar: MatSnackBar) {

                this.url = 'https://www.youtube.com/embed/' + this.data.myVar;
                this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
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
