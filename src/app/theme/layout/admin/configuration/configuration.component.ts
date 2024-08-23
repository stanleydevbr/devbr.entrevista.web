// angular import
import { Component, OnInit, Renderer2 } from '@angular/core';

// project import
import { BerryConfig } from 'src/app/app-config';
import { ThemeService } from 'src/app/theme/shared/service/theme.service';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss'
})
export class ConfigurationComponent implements OnInit {
  rtlLayout!: boolean;
  bodyColor!: string;
  darkLayout!: boolean;
  boxLayout!: boolean;
  headerColor!: string;
  navbarColor!: string;
  fontFamily!: string;
  themeLayout!: string;

  constructor(
    private renderer: Renderer2,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'berry-ltr');
    if ((this.rtlLayout = BerryConfig.isRtlLayout)) {
      this.renderer.addClass(document.body, 'berry-rtl');
      this.renderer.removeClass(document.body, 'berry-ltr');
    }
    if ((this.darkLayout = BerryConfig.isDarkMode)) {
      this.renderer.addClass(document.body, 'berry-dark');
      this.themeService.isDarkTheme.set(this.darkLayout);
    }
    if ((this.boxLayout = BerryConfig.isBoxContainer)) {
      (document.querySelector('.coded-content') as HTMLDivElement).classList.add('container');
    }
    if ((this.bodyColor = BerryConfig.themeColor)) {
      (document.querySelector('body') as HTMLBodyElement).part.add(this.bodyColor);
    }
    if ((this.fontFamily = BerryConfig.fontFamily)) {
      this.renderer.addClass(document.body, this.fontFamily);
    }
    if ((this.themeLayout = BerryConfig.layout)) {
      document.querySelector('.coded-navbar')?.classList.add(this.themeLayout);
      this.themeService.sidebarLayout.set(this.themeLayout);
    }
  }
}
