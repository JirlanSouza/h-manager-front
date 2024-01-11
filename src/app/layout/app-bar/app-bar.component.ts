import { Component } from '@angular/core';
import { IconComponent } from '../../common/components/icon/icon.component';
import { ThemeModeService } from '../../common/services/theme-mode.service';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss',
})
export class AppBarComponent {
  themeModeIcon: string;

  constructor(private readonly themeModeService: ThemeModeService) {
    const themeMode = themeModeService.getThemeMode();
    this.themeModeIcon = themeMode + '_mode';
  }

  toggleThemeMode() {
    const themeMode = this.themeModeService.toggleThemeMode();
    this.themeModeIcon = themeMode + '_mode';
  }
}
