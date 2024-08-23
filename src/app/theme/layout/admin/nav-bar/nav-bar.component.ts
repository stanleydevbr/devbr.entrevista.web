// Angular import
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { NavLogoComponent } from './nav-logo/nav-logo.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavRightComponent } from './nav-right/nav-right.component';
import { BerryConfig } from 'src/app/app-config';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NavLogoComponent, NavLeftComponent, NavRightComponent, SharedModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  // public props
  @Output() NavCollapse = new EventEmitter();
  @Output() NavCollapsedMob = new EventEmitter();
  navCollapsed: boolean;
  windowWidth: number;
  navCollapsedMob: boolean;

  // Constructor
  constructor() {
    this.windowWidth = window.innerWidth;
    this.navCollapsed = this.windowWidth >= 1025 ? BerryConfig.isCollapse_menu : false;
    this.navCollapsedMob = false;
  }

  // public method
  navCollapse() {
    if (this.windowWidth >= 1025) {
      this.navCollapsed = !this.navCollapsed;
      this.NavCollapse.emit();
    }
  }

  @HostListener('window:resize', ['$event'])
  // eslint-disable-next-line
  onResize(event: any): void {
    this.windowWidth = event.target.innerWidth;
    this.navCollapseMob();
  }

  navCollapseMob() {
    if (this.windowWidth < 1025) {
      this.NavCollapsedMob.emit();
    }
  }
}
