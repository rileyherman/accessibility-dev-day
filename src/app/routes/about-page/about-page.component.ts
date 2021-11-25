import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-page',
  templateUrl: 'about-page.component.html',
})
export class AboutPageComponent implements OnInit {

  constructor(private titleService: Title, private router: Router) { }
  
  ngOnInit(): void {
    // this.titleService.setTitle('About - Accessibility Dev Day');
  }

  back = () => {
    this.router.navigate(['']);
  }
}
