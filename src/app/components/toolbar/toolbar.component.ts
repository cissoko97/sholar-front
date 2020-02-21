import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, AfterViewInit {
  private account = null;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.account = document.querySelector<HTMLElement>('#account-panel-button');
    if (this.account) {
      this.account.classList.add('icon-only');

      this.account.addEventListener('click', () => {
        console.log('hello world from Account');
      });
    }

    const leftPanels: LeftPanel[] = [
      new LeftPanel(document.querySelector('#notification-panel-button'),
        document.querySelector('#notification-panel')),

      new LeftPanel(document.querySelector('#account-panel-button'),
        document.querySelector('#account-panel')),

      new LeftPanel(document.querySelector('#settings-panel-button'),
        document.querySelector('#settings-panel')),

      new LeftPanel(document.querySelector('#message-panel-button'),
        document.querySelector('#message-panel')),

      new LeftPanel(document.querySelector('#event-panel-button'),
        document.querySelector('#event-panel'))

    ];

    leftPanels.forEach(panel => {
      panel.button.addEventListener('click', () => {
        if (panel.isVisible) {
          panel.hide();
        } else {
          leftPanels.forEach(p => p.hide());
          panel.show();
        }
      });
    });
    console.log(this.account);
  }
}

export class LeftPanel {
  public isVisible = false;
  private closeButton: HTMLElement;

  constructor(public button: HTMLElement, private panel: HTMLDivElement) {
    this.hide();

    this.closeButton = panel.querySelector('.panel-close-button');

    this.closeButton.addEventListener('click', () => this.hide());

  }

  hide() {
    this.panel.classList.remove('left-panel-visible');
    this.isVisible = false;
  }

  show() {
    this.panel.classList.add('left-panel-visible');
    this.isVisible = true;
  }

  toggle() {
    this.isVisible ? this.hide() : this.show();
  }
}
