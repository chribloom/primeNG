import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products: any[]=[];
  constructor(private http: HttpClient,
    private route: ActivatedRoute, private router: Router
    ) {}

  ngOnInit(): void { //chiamata http...take response & put in locals

    this.http.get('https://dummyjson.com/products').subscribe({
      next: (response:any)=>{ //callback
        this.products= response.products;

      }
    })
  }

handleClick() {
  //execute action
}

goDetail(product: any){
  this.router.navigate(
    ['/table-component/detail'],

    { queryParams: { id: product.id} }
  );
}
}

