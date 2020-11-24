import { Component, OnInit } from '@angular/core';
import { GetProductDetailsService } from 'src/app/services/get-product-details.service';
import {
  MatSnackBar, MatGridList,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material';

@Component({
  selector: 'app-over-view-page',
  templateUrl: './over-view-page.component.html',
  styleUrls: ['./over-view-page.component.scss']
})
export class OverViewPageComponent implements OnInit {
  products: any;
  totalcartvalue = 0;
  value
  conditionToDisaply = false
  orders = [];

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private productservice: GetProductDetailsService, private snackBar: MatSnackBar) {
    // this.products = productservice.products

  }


  openSnackBar() {

  }

  ngOnInit() {

    this.productservice.orders.push(this.orders);
    this.saveProductsByAdmin();


  }

  saveProductsByAdmin() {
    this.productservice.saveProducts().subscribe(data => {
      console.log("saving"+data.messageHeader.messageStatus);
      if (data.messageHeader.messageStatus === "SUCCESS") {
        this.getProducts();
      } else {
        this.products = this.productservice.products;
      }
    });
    this.productservice.saveDetails().subscribe();
  }

  getProducts() {
    this.productservice.getProductsList().subscribe(data => {
      this.products = data.messagePayload;
      console.log("Data: " + data.messagePayload);
    });
  }

  //add to cart method
  addToCart(indexValue, propductId) {

    //snackbar notification
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = 2000000000;
    this.snackBar.open('Added to Cart', '', config);



  }

  //remove from cart


  removeFromCart(indexValue, propductId) {
    this.totalcartvalue -= 1;
    this.products[indexValue].quantity++;
    for (let ord of this.productservice.orders) {
      if (ord.indexVal == indexValue) {
        ord.quantity -= 1
      }
    }

    this.snackBar.open("  Removed From Cart  ", this.products[indexValue].name, { duration: 2000, })
    this.productservice.sendTotal(this.totalcartvalue)



  }

  //get quanity

  getQuantity(i) {
    for (let orders of this.productservice.orders) {
      if (orders.indexVal == i) {
        return orders.quantity
      }
    }
  }


  //button to see orders
  show() {
    //  this.productservice.sendOrders(this.orders ) 
    console.log(this.productservice.orders)



  }


}