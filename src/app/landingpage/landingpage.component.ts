import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  public selectedTab: string;

  public onSelect(): void {
    this.selectedTab = "cebu";
  };

  ngOnInit() {
  }




}
