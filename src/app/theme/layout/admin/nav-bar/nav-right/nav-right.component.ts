// Angular import
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { TranslateService } from '@ngx-translate/core';
import screenfull from 'screenfull';
import { BerryConfig } from 'src/app/app-config';

@Component({
  selector: 'app-nav-right',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './nav-right.component.html',
  styleUrl: './nav-right.component.scss'
})
export class NavRightComponent implements OnInit {
  user?: null;
  screenFull: boolean = true;

  // constructor
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    setTimeout(() => {
      this.useLanguage(BerryConfig.i18n);
    }, 0);
  }

  // user according language change of sidebar menu item
  useLanguage(language: string) {
    this.translate.use(language);
  }

  // public props
  componentSections = [
    {
      title: 'UI Components',
      items: [
        {
          title: 'Alerts'
        },
        {
          title: 'Accordions'
        },
        {
          title: 'DropDown'
        },
        {
          title: 'Badges'
        },
        {
          title: 'Breadcrumbs'
        }
      ]
    },
    {
      title: 'Application',
      items: [
        {
          title: 'Chat'
        },
        {
          title: 'Kanban'
        },
        {
          title: 'Mail'
        },
        {
          title: 'Calendar'
        },
        {
          title: 'E-Commerce'
        }
      ]
    },
    {
      title: 'Components',
      items: [
        {
          title: 'Sweet Alert'
        },
        {
          title: 'Light Box'
        },
        {
          title: 'Modal'
        },
        {
          title: 'Notification'
        },
        {
          title: 'Tree View'
        }
      ]
    }
  ];
  notification = [
    {
      images: 'assets/images/user/avatar-2.jpg',
      background: 'bg-light-success',
      icon: 'ti ti-building-store',
      title: 'John Doe',
      time: '2 min ago',
      text: 'It is a long established fact that a reader will be distracted',
      badgeType: true,
      mailType: false,
      imagesType: false,
      conformation: false,
      iconType: false
    },
    {
      images: 'assets/images/user/avatar-2.jpg',
      background: 'bg-light-success',
      icon: 'ti ti-building-store',
      title: 'Store Verification Done',
      time: '3 min ago',
      text: 'We have successfully received your request.',
      badgeType: true,
      mailType: false,
      imagesType: false,
      conformation: false,
      iconType: true
    },
    {
      images: 'assets/images/user/avatar-2.jpg',
      background: 'bg-light-primary',
      icon: 'ti ti-mailbox',
      title: 'Check Your Mail.',
      time: '5 min ago',
      text: "All done! Now check your inbox as you're in for a sweet treat!",
      badgeType: false,
      mailType: true,
      imagesType: false,
      conformation: false,
      iconType: true
    },
    {
      images: 'assets/images/user/avatar-2.jpg',
      background: 'bg-light-success',
      icon: 'ti ti-building-store',
      title: 'John Doe',
      time: '8 min ago',
      text: 'Uploaded two file on 21Jan 2020',
      badgeType: false,
      mailType: false,
      imagesType: true,
      conformation: false,
      iconType: false
    },
    {
      images: 'assets/images/user/avatar-3.jpg',
      background: 'bg-light-success',
      icon: 'ti ti-building-store',
      title: 'John Doe',
      time: '10 min ago',
      text: 'It is a long established fact that a reader will be distracted',
      badgeType: false,
      mailType: false,
      imagesType: false,
      conformation: true,
      iconType: false
    }
  ];

  // full screen toggle
  toggleFullscreen() {
    this.screenFull = screenfull.isFullscreen;
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
}
