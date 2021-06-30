import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
  a:hover {
    cursor: pointer;
  }
  `
  ]
})
export class MenuComponent implements OnInit {

  routes = [
    {
      name: 'Home',
      path: '/pages/home'
    },
    {
      name: 'About',
      path: '/pages/about'
    },
    {
      name: 'Contact',
      path: '/pages/contact'
    },
    {
      name: 'Posts',
      path: '/pages/posts'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
