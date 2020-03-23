import { TvshowsComponent } from './../tvshows/tvshows.component';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css'],
})

export class TvshowComponent {
  @Input() data;
  tvshows;

  constructor(
    public dialog: MatDialog,
    tvshowsComponent: TvshowsComponent) {

    this.tvshows = tvshowsComponent.getSeries();
  }

  getSeries() {
    return this.tvshows;
  }

  openDialog(serie): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {myVar: serie.trailer, myTitle: serie.title},
      hasBackdrop: true,
      backdropClass: 'dialogBackdrop',
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

