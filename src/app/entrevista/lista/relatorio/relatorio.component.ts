import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-relatorio',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './relatorio.component.html',
  styleUrl: './relatorio.component.scss'
})
export default class RelatorioComponent {

}
