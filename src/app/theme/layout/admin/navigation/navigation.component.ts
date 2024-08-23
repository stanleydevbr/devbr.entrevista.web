// Angular import
import { Component, EventEmitter, Output, OnInit, effect } from '@angular/core';
import { Router } from '@angular/router';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NavContentComponent } from './nav-content/nav-content.component';
import { BerryConfig } from 'src/app/app-config';
import { ThemeService } from 'src/app/theme/shared/service/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [SharedModule, NavContentComponent, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  // public props
  @Output() NavCollapsedMob = new EventEmitter();
  @Output() SubmenuCollapse = new EventEmitter();
  navCollapsedMob = false;
  windowWidth = window.innerWidth;
  themeMode!: string;

  // constructor
  constructor(
    public router: Router,
    private themeService: ThemeService
  ) {
    effect(() => {
      this.updateThemeLayout(this.themeService.sidebarLayout());
    });
  }

  ngOnInit() {
    this.themeMode = BerryConfig.layout;
  }

  // private method
  private updateThemeLayout(layout: string) {
    this.themeMode = layout;
  }

  // public method
  navCollapseMob() {
    if (this.windowWidth < 1025) {
      this.NavCollapsedMob.emit();
    }
  }

  navSubmenuCollapse() {
    document.querySelector('app-navigation.coded-navbar')?.classList.add('coded-trigger');
  }

  returnHome() {
    this.router.navigate(['/sample-page']);
  }
}
