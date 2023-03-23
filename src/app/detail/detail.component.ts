import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  products: any[] = []; //contiene tutti i prodotti della lista
  product: any; //contiene il prodotto singolo
id: any;

constructor(private http: HttpClient,
    private route: ActivatedRoute, private router: Router
    ) {
      this.id= +this.route.snapshot?.queryParams['id'] || 0

    }

  ngOnInit(): void { //chiamata http...take response & put in locals
    this.http.get('https://dummyjson.com/products').subscribe({

    next: (response:any)=>{ //callback
      this.products= response.products;
      this.product = this.products.find((item:any)=>item.id === this.id); //per portare il singolo dettaglio richiesto

    }
  })
  }
}
