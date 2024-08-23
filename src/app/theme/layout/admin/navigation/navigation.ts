export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'cadastros',
    title: 'Cadastros',
    type: 'group',
    icon: 'ti ti-left',
    children: [
      {
        id: 'cadastro-base',
        title: 'Cadastro Base',
        type: 'collapse',
        icon: 'ti ti-menu-2',
        children: [
          {
            id: 'grupo-pergunta',
            title: 'Grupo de Perguntas',
            type: 'item',
            url: '/grupo-pergunta',
            external: false
          },
          {
            id: 'linguagem',
            title: 'Linguagens',
            type: 'item',
            url: '/linguagem',
            external: false
          },
          {
            id: 'nivel-conhecimento',
            title: 'Nivel de Conhecimento',
            type: 'item',
            url: '/nivel-conhecimento',
            external: false
          },    
          {
            id: 'pergunta',
            title: 'Perguntas',
            type: 'item',
            url: '/pergunta',
            external: false
          }, 
          {
            id: 'questionario',
            title: 'Questionarios',
            type: 'item',
            url: '/questionario',
            external: false
          }
        ]
      }
    ]
  },
  {
    id: 'entrevista',
    title: 'Entrevista',
    type: 'group',
    icon: 'ti ti-left',
    children: [
      {
        id: 'agenda',
        title: 'Agenda',
        type: 'item',
        url: '/agenda',
        classes: 'nav-item',
        icon: 'ti ti-calendar'        
      },      
      {
        id: 'candidato',
        title: 'Candidatos',
        type: 'item',
        url: '/candidato',
        classes: 'nav-item',
        icon: 'ti ti-user'        
      },
      {
        id: 'entrevistador',
        title: 'Entrevistadores',
        type: 'item',
        url: '/entrevistador',
        classes: 'nav-item',
        icon: 'ti ti-user-check'        
      },
      {
        id: 'relatorio',
        title: 'Relatórios',
        type: 'item',
        url: '/relatorio',
        classes: 'nav-item',
        icon: 'ti ti-report'        
      }                  
    ]

  }
];
