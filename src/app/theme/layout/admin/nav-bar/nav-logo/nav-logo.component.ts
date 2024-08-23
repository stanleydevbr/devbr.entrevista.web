// Angular import
import { Component, Input, Output, EventEmitter, OnInit, effect } from '@angular/core';
import { Router } from '@angular/router';

// project import
import { BerryConfig } from 'src/app/app-config';
import { ThemeService } from 'src/app/theme/shared/service/theme.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-nav-logo',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './nav-logo.component.html',
  styleUrl: './nav-logo.component.scss'
})
export class NavLogoComponent implements OnInit {
  // public props
  @Input() navCollapsed!: boolean;
  @Output() NavCollapse = new EventEmitter();
  windowWidth: number;
  themeMode!: boolean;

  // Constructor
  constructor(
    public router: Router,
    private themeService: ThemeService
  ) {
    this.windowWidth = window.innerWidth;
    effect(() => {
      this.isDarkMode(this.themeService.isDarkTheme());
    });
  }

  // life cycle event
  ngOnInit() {
    this.themeMode = BerryConfig.isDarkMode;
  }

  // private method
  private isDarkMode(isDark: boolean) {
    this.themeMode = isDark;
  }

  // public import
  navCollapse() {
    if (this.windowWidth >= 1025) {
      this.navCollapsed = !this.navCollapsed;
      this.NavCollapse.emit();
    }
  }

  returnToHome() {
    this.router.navigate(['/default']);
  }
}
