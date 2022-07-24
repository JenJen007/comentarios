import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img = 'https://th.bing.com/th/id/OIP.l6OBugPlc1CKKiWQ9AnEmwHaHa?pid=ImgDet&rs=1';

  constructor() { }

  ngOnInit(): void {
  }

}
