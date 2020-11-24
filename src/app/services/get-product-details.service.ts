import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProductDetailsService {

  URL: string = 'http://localhost:8058/api/v1';
  public totalSubject = new Subject();
  public orderSubject = new Subject();
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
  };

 
  
  orders = []

  products = [
    {
      "id": "0",
      "name": "Carrot",
      "quantity": 2,
      "price": 12,
      "url": "https://www.sciencedaily.com/images/2008/07/080722102723_1_540x360.jpg"
    },
    {
      "id": "1",
      "name": "Apple",
      "quantity": 10,
      "price": 12,
      "url": "https://www.sciencedaily.com/images/2008/07/080722102723_1_540x360.jpg"

    }
    ,
    {
      "id": "2",
      "name": "Vanilla",
      "quantity": 12,
      "price": 25,
      "url": "https://www.sciencedaily.com/images/2008/07/080722102723_1_540x360.jpg"


    }, {
      "id": "3",
      "name": "Vanilla",
      "quantity": 12,
      "price": 25,
      "url": "https://www.sciencedaily.com/images/2008/07/080722102723_1_540x360.jpg"


    },{
      "id": "4",
      "name": "Carrot",
      "quantity": 2,
      "price": 12,
      "url": "https://www.sciencedaily.com/images/2008/07/080722102723_1_540x360.jpg"
    },
    {
      "id": "5",
      "name": "Apple",
      "quantity": 10,
      "price": 12,
      "url": "https://www.sciencedaily.com/images/2008/07/080722102723_1_540x360.jpg"

    }
    ,
    {
      "id": "6",
      "name": "Vanilla",
      "quantity": 12,
      "price": 25,
      "url": "https://www.sciencedaily.com/images/2008/07/080722102723_1_540x360.jpg"


    }, {
      "id": "7",
      "name": "Vanilla",
      "quantity": 12,
      "price": 25,
      "url": "https://www.sciencedaily.com/images/2008/07/080722102723_1_540x360.jpg"


    }





  ]

  //products end

  sendTotal(totalVal) {


    this.totalSubject.next(totalVal)
  }




//myorders
  sendOrders(orders) {

    this.orderSubject.next(orders)
    console.log(orders + "from service")
  }

  getProductsList(): Observable<any> {
    return this.http.get<any>(this.URL+"/product", this.httpOptions);
  }

  getProductDetails(id: any): Observable<any> {
    return this.http.get<any>(this.URL+"/details/product/"+id, this.httpOptions);
  }

  getCartList(): Observable<any> {
    return this.http.get<any>(this.URL, this.httpOptions);
  }

  saveToCart(product: any): Observable<any> {
    return this.http.post<any>(this.URL, product, this.httpOptions);
  }

  saveProducts(): Observable<any> {
    return this.http.post<any>(this.URL+"/product", this.httpOptions);
  }

  saveDetails(): Observable<any> {
    return this.http.post<any>(this.URL+"/details/product", this.httpOptions);
  }

  deleteFromCard(product: any): Observable<any> {
    return this.http.post<any>(this.URL, product, this.httpOptions);
  }

  placeOrder(product: any): Observable<any> {
    return this.http.post<any>(this.URL, product, this.httpOptions);
  }
}
