import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { Component, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbOffcanvas, NgbPaginationModule, NgbTooltipModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeaderDirective, SortEvent } from 'src/app/theme/shared/directive/sortable.directive';
import { Observable } from 'rxjs';

import { SharedModule } from 'src/app/theme/shared/shared.module';

import { LinguagemService } from './servico/linguagem.service';
import { linguagem } from './servico/linguagem';
import { CadLinguagemComponent } from './cad-linguagem/cad-linguagem.component';

@Component({
  selector: 'app-linguagem',
  standalone: true,
  imports: [
    DecimalPipe,
    FormsModule,
    NgbdSortableHeaderDirective,
    AsyncPipe,
    NgbTypeaheadModule,
    NgbPaginationModule,
    CommonModule,
    NgbTooltipModule,    
    SharedModule,
    CadLinguagemComponent
  ],
  templateUrl: './linguagem.component.html',
  styleUrl: './linguagem.component.scss',
  providers: [DecimalPipe, LinguagemService]
})
export class LinguagemComponent {
  linguagem$!: Observable<linguagem[]>;
  total$!: Observable<number>;

  @ViewChildren(NgbdSortableHeaderDirective) headers!: QueryList<NgbdSortableHeaderDirective>;

  closeResult!: string;

  constructor(
    public service: LinguagemService,
    private offcanvasService: NgbOffcanvas
  ) {
    this.linguagem$ = service.linguagem$;
    this.total$ = service.total$;
  }

  // public method
  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  addLinguagem(content: TemplateRef<string>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
}
