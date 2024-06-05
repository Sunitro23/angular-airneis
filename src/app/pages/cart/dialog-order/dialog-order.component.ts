import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialog-order',
  templateUrl: './dialog-order.component.html',
  styleUrls: ['./dialog-order.component.scss'],
})
export class DialogOrderComponent {
  public address: string = '';
  public allPaymentMethods = ['Credit Card', 'Paypal', 'Cash'];
  public paymentMethod: string = '';
  constructor(
    public dialogRef: MatDialogRef<DialogOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  createOrder() {
    this.dialogRef.close({
      address: this.address,
      paymentMethod: this.paymentMethod,
    });
  }
}
