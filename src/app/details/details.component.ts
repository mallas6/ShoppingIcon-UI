import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GetProductDetailsService } from 'src/app/services/get-product-details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: any;
  details: Object[]=[];
  constructor(private route: ActivatedRoute, private productDetailsService: GetProductDetailsService) { }

  ngOnInit(): void {
    console.log('thing', this.route.snapshot.params.username);

    // observable way
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.getDetails(this.id);
  }

  getDetails(id:any) {
    this.productDetailsService.getProductDetails(id).subscribe(data => {

      console.log("In details"+data.productName);
     this.details.push(data);
    });
  }
}
