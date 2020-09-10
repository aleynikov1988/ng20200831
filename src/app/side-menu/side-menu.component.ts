import { Component, OnInit, ViewChild, Output, EventEmitter, ContentChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav"

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
    @ViewChild("drawer", {static: true})
    public menu: MatDrawer;

    @ViewChild("block", {static: true, read: ViewContainerRef})
    public block: ViewContainerRef;

    @ContentChild("content", {static: true})
    public content: TemplateRef<any>;

    @Output()
    public sideNavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

    ngOnInit(): void {
        this.sideNavControl.emit(this.menu);
        this.block.createEmbeddedView(this.content);
    }
}
