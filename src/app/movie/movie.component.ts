import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MoviesComponent } from '../movies/movies.component';
import { MovieService } from './../movie.service';
import { Movie } from '../movie.model';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent {
  @Input() data;

  constructor(
    public dialog: MatDialog,
    public movieComponent: MoviesComponent
   ) {}

  deleteAction(movie) {
    this.movieComponent.deleteMovieById(movie.id);
  }

  openDialog(movie): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {myVar: movie.URL, myTitle: movie.Title},
      hasBackdrop: true,
      backdropClass: 'dialogBackdrop',
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

