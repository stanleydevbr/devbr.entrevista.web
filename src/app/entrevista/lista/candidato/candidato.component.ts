import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-candidato',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './candidato.component.html',
  styleUrl: './candidato.component.scss'
})
export default class CandidatoComponent {

}
