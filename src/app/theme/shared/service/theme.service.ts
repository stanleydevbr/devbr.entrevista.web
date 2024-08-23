import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme = signal<string>('');
  sidebarLayout = signal<string>('');
  isRtlTheme = signal<boolean>(false);
  isDarkTheme = signal<boolean>(false);
}
