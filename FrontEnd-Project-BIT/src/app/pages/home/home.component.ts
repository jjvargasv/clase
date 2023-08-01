import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/auth/interfaces/product.interface';
import { Cart } from 'src/app/protected/interfaces/cart.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products!: any[];
  cart!: any[];
  constructor(private produtsService: ProductsService) {}
  ngOnInit(): void {
    this.produtsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
  agregarCarrito(product: Product) {
    /* console.log(producto); */
    /* localStorage.getItem('cart'); */

    const cartStorage = localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')!) : [];
    this.cart = cartStorage;
   

    /*  if (this.cart?.length > 0){ */
    const producEncontrado = this.cart.find((prod: Cart) => {
      return prod._id === product._id;
    });
    console.log(producEncontrado);
    if (producEncontrado) {
      producEncontrado.quantity += 1;
      producEncontrado.total = producEncontrado.price * producEncontrado.quantity;
    } else {
      this.cart.push({
        _id: product._id,
        name: product.name,
        price: product.price,
        total: product.price,
        UrlImage: product.urlImage,
        describe: product.description,
        available: product.quantity,
        quantity: 1,
      });
    }
    console.log(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
