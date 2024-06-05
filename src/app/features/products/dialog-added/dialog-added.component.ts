import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'dialog-added',
  templateUrl: './dialog-added.component.html',
  styleUrls: ['./dialog-added.component.scss'],
})
export class MyDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: Router
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  goToCart(): void {
    this.dialogRef.close();
    this.route.navigate(['/cart']);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
