import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MoviesComponent } from '../movies/movies.component';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})

export class MovieComponent {
  @Input() data;
  movies;


  constructor(
    public dialog: MatDialog,
    movieComponent: MoviesComponent) {

    this.movies = movieComponent.getMovies();
  }

  openDialog(movie): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {myVar: movie.trailer, myTitle: movie.title},
      hasBackdrop: true,
      backdropClass: 'dialogBackdrop',
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

