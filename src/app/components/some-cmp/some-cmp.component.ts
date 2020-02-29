import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList, AfterContentInit } from '@angular/core';
import { SiderDirective } from 'src/app/sider.directive';


@Component({ selector: 'app-somecmp', templateUrl: 'some-cmp.component.html' })
export class SomeCmpComponent implements AfterViewInit, AfterContentInit {
  @ViewChild('pane', { static: false }) child!: any;
  @ViewChildren(SiderDirective) siders: QueryList<any>;

  /**
   *
   */
  ngAfterViewInit() {
    console.log(this.siders);
    console.log(this.child);

  }

  ngAfterContentInit() {
  }
}
