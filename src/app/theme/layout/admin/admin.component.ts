// Angular import
import { Component, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, Location, LocationStrategy } from '@angular/common';

// Project import
import { BerryConfig } from 'src/app/app-config';
import { ThemeService } from '../../shared/service/theme.service';
import { SharedModule } from '../../shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, SharedModule, NavigationComponent, NavBarComponent, ConfigurationComponent, RouterModule, BreadcrumbComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  // public props
  layouts = BerryConfig.layout;
  currentLayout!: string;
  navCollapsed: boolean;
  navCollapsedMob = false;
  windowWidth: number;

  // Constructor
  constructor(
    private location: Location,
    private locationStrategy: LocationStrategy,
    public themeService: ThemeService
  ) {
    this.currentLayout = BerryConfig.layout;

    let current_url = this.location.path();
    const baseHref = this.locationStrategy.getBaseHref();
    if (baseHref) {
      current_url = baseHref + this.location.path();
    }

    if (current_url === baseHref + '/layout/theme-compact' || current_url === baseHref + '/layout/box') {
      BerryConfig.isCollapse_menu = true;
    }

    this.windowWidth = window.innerWidth;
    this.navCollapsed = this.windowWidth >= 1025 ? BerryConfig.isCollapse_menu : false;
    effect(() => {
      this.updateThemeLayout(this.themeService.sidebarLayout());
    });
  }

  // private method
  private updateThemeLayout(layout: string) {
    this.currentLayout = layout;
  }

  // public method
  navMobClick() {
    if (this.navCollapsedMob && !document.querySelector('app-navigation.coded-navbar')?.classList.contains('mob-open')) {
      this.navCollapsedMob = !this.navCollapsedMob;
      setTimeout(() => {
        this.navCollapsedMob = !this.navCollapsedMob;
      }, 100);
    } else {
      this.navCollapsedMob = !this.navCollapsedMob;
    }
    if (document.querySelector('app-navigation.pc-sidebar')?.classList.contains('navbar-collapsed')) {
      document.querySelector('app-navigation.pc-sidebar')?.classList.remove('navbar-collapsed');
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }

  closeMenu() {
    if (document.querySelector('app-navigation.pc-sidebar')?.classList.contains('mob-open')) {
      document.querySelector('app-navigation.pc-sidebar')?.classList.remove('mob-open');
    }
  }
}
