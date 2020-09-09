import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav"

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
    // @Output()
    // public setSideNavControl: EventEmitter<MatDrawer> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }
}
