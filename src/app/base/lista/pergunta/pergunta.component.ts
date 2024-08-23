import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-pergunta',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './pergunta.component.html',
  styleUrl: './pergunta.component.scss'
})
export default class PerguntaComponent {

}
