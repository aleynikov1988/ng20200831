import { Component, OnInit, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input()
    public title!: string;

    @Input()
    public drawer: MatDrawer;

    ngOnInit(): void {
    }
}
