import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-questionario',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './questionario.component.html',
  styleUrl: './questionario.component.scss'
})
export default class QuestionarioComponent {

}
