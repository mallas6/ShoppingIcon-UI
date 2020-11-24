import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: boolean;
  breadcurmbsMenu = null;
  loadDashoard: boolean;

  constructor(
    private route: Router) { }

  ngOnInit() { }


}
