import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})

export class DialogComponent {
 url;
 videoUrl;

  constructor(
  private sanitizer: DomSanitizer,
  public dialogRef: MatDialogRef<DialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,  private snackBar: MatSnackBar) {
  this.url = 'https://www.youtube.com/embed/' + this.data.myVar;
  this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
}
}
