import {Component, HostBinding, OnInit} from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chriskobb';

  public isDark = true;

  constructor(public overlayContainer: OverlayContainer) {}

  ngOnInit(): void {
        this.onSetTheme('dark-theme');
    }

  public toggleDarkTheme() {
    if (this.isDark) {
      this.onSetTheme('light-theme');
      this.isDark = false;
    }
    else {
      this.onSetTheme('dark-theme');
      this.isDark = true;
    }
  }

  @HostBinding('class') componentCssClass: any;
  private onSetTheme(theme: any) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
}
