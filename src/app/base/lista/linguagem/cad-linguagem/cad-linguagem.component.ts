import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TagInputModule } from 'ngx-chips';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-cad-linguagem',
  standalone: true,
  imports: [CommonModule, TagInputModule, SharedModule],
  templateUrl: './cad-linguagem.component.html',
  styleUrl: './cad-linguagem.component.scss'
})
export class CadLinguagemComponent {
  autocompleteItems = ['Alabama', 'Wyoming', 'Henry Die', 'John Doe'];


  dataProduct = [
    {
      type: 'text',
      title: 'Price*'
    },
    {
      type: 'text',
      title: 'Discount*'
    },
    {
      type: 'text',
      title: 'Quantity*'
    },
    {
      type: 'text',
      title: 'Brand*'
    },
    {
      type: 'text',
      title: 'Weight*'
    },
    {
      type: 'text',
      title: 'Extra Shipping Free*'
    }
  ];  
}
