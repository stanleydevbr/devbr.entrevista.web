// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sample-page.component.html',
  styleUrl: './sample-page.component.scss'
})
export class SamplePageComponent {}
