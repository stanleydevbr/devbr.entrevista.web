import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/sample-page',
        pathMatch: 'full'
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/sample-page/sample-page.component').then((c) => c.SamplePageComponent)
      },
      {
        path: 'grupo-pergunta',
        loadComponent: () => import('./base/lista/grupo-pergunta/grupo-pergunta.component').then((c) => c.GrupoPerguntaComponent)
      },      
      {
        path: 'linguagem',
        loadComponent: () => import('./base/lista/linguagem/linguagem.component').then((c) => c.LinguagemComponent)
      },   
      {
        path: 'nivel-conhecimento',
        loadComponent: () => import('./base/lista/nivel-conhecimento/nivel-conhecimento.component')
      },           
      {
        path: 'pergunta',
        loadComponent: () => import('./base/lista/pergunta/pergunta.component')
      },       
      {
        path: 'questionario',
        loadComponent: () => import('./base/lista/questionario/questionario.component')
      },     
      {
        path: 'agenda',
        loadComponent: () => import('./entrevista/lista/agenda/agenda.component')
      },                
      {
        path: 'candidato',
        loadComponent: () => import('./entrevista/lista/candidato/candidato.component')
      },  
      {
        path: 'entrevistador',
        loadComponent: () => import('./entrevista/lista/entrevistador/entrevistador.component')
      },   
      {
        path: 'relatorio',
        loadComponent: () => import('./entrevista/lista/relatorio/relatorio.component')
      },                
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
