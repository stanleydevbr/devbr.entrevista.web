import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export default class AgendaComponent {

}
