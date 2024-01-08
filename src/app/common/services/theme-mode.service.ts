import { Injectable } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeModeService {
  private readonly THEME_MODE_KEY = 'theme-mode';
  private readonly DEFAULT_THEME_MODE: ThemeMode = 'light';
  constructor() {}

  toggleThemeMode(): ThemeMode {
    const mode = this.getThemeMode();

    if (mode === 'light') {
      this.setThemeMode('dark');
      return 'dark';
    }

    this.setThemeMode('light');

    return 'light';
  }

  isDarkMode() {
    return this.getThemeMode() === 'dark';
  }

  getThemeMode(): ThemeMode {
    const themeMode = localStorage.getItem(
      this.THEME_MODE_KEY
    ) as ThemeMode | null;

    if (themeMode) return themeMode;

    this.setThemeMode(this.DEFAULT_THEME_MODE);

    return this.DEFAULT_THEME_MODE;
  }

  syncThemeMode() {
    let themeMode = localStorage.getItem(
      this.THEME_MODE_KEY
    ) as ThemeMode | null;

    if (!themeMode) themeMode = this.DEFAULT_THEME_MODE;

    this.setThemeMode(themeMode);
  }

  private setThemeMode(mode: ThemeMode) {
    localStorage.setItem(this.THEME_MODE_KEY, mode);
    this.applyThemeMode(mode);
  }

  private applyThemeMode(mode: ThemeMode) {
    const html = document.querySelector('html');
    html?.setAttribute(this.THEME_MODE_KEY, mode);
  }
}
