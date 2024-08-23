import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-entrevistador',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './entrevistador.component.html',
  styleUrl: './entrevistador.component.scss'
})
export default class EntrevistadorComponent {

}
