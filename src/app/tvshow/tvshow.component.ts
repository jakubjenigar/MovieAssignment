import { TvshowsComponent } from './../tvshows/tvshows.component';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css'],
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

export class TvshowComponent {
  @Input() data;
  tvshows;
  likeState = 'unliked';
  iconName = 'heart-empty';

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    tvshowsComponent: TvshowsComponent) {

    this.tvshows = tvshowsComponent.getSeries();
  }

  getSeries() {
    return this.tvshows;
  }

  openDialog(url): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {myVar: url.trailer},
      hasBackdrop: true,
      backdropClass: 'dialogBackdrop',
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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

