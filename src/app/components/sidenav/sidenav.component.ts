import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, ContentChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit, AfterViewInit {
  private TAG = 'SidenavComponent';
  private iconOnly = false;
  @ViewChild('sidenav__container', { static: false }) sideNavContainer: ElementRef;
  constructor(private appCom: AppComponent) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    this.sideNavContainer.nativeElement.firstChild.addEventListener('click', (e) => {
      if (!this.iconOnly) {
        this.sideNavContainer.nativeElement.classList.add('icon-only');
        this.appCom.main.nativeElement.classList.add('icon-only');

      } else {
        this.sideNavContainer.nativeElement.classList.remove('icon-only');
        this.appCom.main.nativeElement.classList.remove('icon-only');
      }
      this.iconOnly = !this.iconOnly;
    });
  }
}
