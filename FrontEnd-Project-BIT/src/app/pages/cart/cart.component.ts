import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  ngOnInit(): void {
    const cartStorage = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')!)
      : [];
    this.cart = cartStorage;
    console.log(this.cart);
  }

  subtractQuantity(product: any) {
  
    // TODO pendiente por resolver
    
   /*  this.cart = this.cart.map((item) => {
      if (item._id === product._id) {
        if (item.quantity > 0) {
          item.quantity -= 1;
          item.total = item.price * item.quantity;
        }
      }
     
      
      return item;
    })
     */
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  addQuantity(product: any) {
    this.cart = this.cart.map((item) => {
      if (item._id === product._id) {
        if (item.quantity < item.stock) {
          item.quantity += 1;
          item.total = item.price * item.quantity;
        }
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  removeToCart(_id: string) {
    this.cart = this.cart.filter((item) => {
      return item._id !== _id;
    });
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
