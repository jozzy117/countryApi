import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  country: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.country = this.route.snapshot.data['country'][0];
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
