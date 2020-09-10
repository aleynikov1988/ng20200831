import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'My Application';
    public drawer: MatDrawer;

    public sideNavControl(drawer: MatDrawer) {
        this.drawer = drawer;
    }

    public clickMe() {
        console.log("click Me");
    }
}
