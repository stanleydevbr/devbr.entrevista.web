// Angular import
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, effect } from '@angular/core';
import { RouterModule } from '@angular/router';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { NavigationItem } from '../../navigation';
import { BerryConfig } from 'src/app/app-config';
import { ThemeService } from 'src/app/theme/shared/service/theme.service';

@Component({
  selector: 'app-nav-collapse',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, NavItemComponent],
  templateUrl: './nav-collapse.component.html',
  styleUrl: './nav-collapse.component.scss'
})
export class NavCollapseComponent implements OnInit {
  // public props
  @Output() showCollapseItem: EventEmitter<object> = new EventEmitter();
  @Input() item!: NavigationItem;

  currentLayout!: string;
  windowWidth = window.innerWidth;

  // construction
  constructor(public themeService: ThemeService) {
    effect(() => {
      this.updateThemeLayout(this.themeService.sidebarLayout());
    });
  }

  // life cycle hook
  ngOnInit() {
    this.currentLayout = BerryConfig.layout;
  }

  // private method
  private updateThemeLayout(layout: string) {
    this.currentLayout = layout;
  }

  // public method
  navCollapse(e: MouseEvent) {
    let parent = e.target as HTMLElement;

    if (parent?.tagName === 'SPAN') {
      parent = parent.parentElement!;
    }

    if (this.currentLayout === 'vertical') {
      parent = (parent as HTMLElement).parentElement as HTMLElement;
    }

    const sections = document.querySelectorAll('.coded-hasmenu');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] !== parent) {
        sections[i].classList.remove('coded-trigger');
      }
    }

    let first_parent = parent.parentElement;
    let pre_parent = ((parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
    if (first_parent?.classList.contains('coded-hasmenu')) {
      do {
        first_parent?.classList.add('coded-trigger');
        first_parent = ((first_parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (first_parent.classList.contains('coded-hasmenu'));
    } else if (pre_parent.classList.contains('coded-submenu')) {
      do {
        pre_parent?.parentElement?.classList.add('coded-trigger');
        pre_parent = (((pre_parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (pre_parent.classList.contains('coded-submenu'));
    }
    parent.classList.toggle('coded-trigger');
  }

  subMenuCollapse(item: object) {
    this.showCollapseItem.emit(item);
  }
}
