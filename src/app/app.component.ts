import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ng20200831';

    public imgSrc  = "https://resources.stuff.co.nz/content/dam/images/4/y/o/1/x/m/image.related.StuffLandscapeSixteenByNine.1240x700.4yo63b.png/1599145979090.jpg?format=pjpg&optimize=medium";
    public imgWidth = 15;
    public content = this.domSanitizer.bypassSecurityTrustHtml("<span>hello Putin</span>");

    private money = 3000;
    public user = {
        name: "Maxim"
    };

    public getSalary(): number {
        return Math.round(this.money * 1.2);
    }

    public click(content: HTMLDivElement, event: MouseEvent): void {
        console.log("Ooo click button")
        // console.log(content);
        // console.log(event);
    }

    public search(value: string): void {
        console.log(value);
    }

    constructor(
        private readonly domSanitizer: DomSanitizer
    ) {}
}
