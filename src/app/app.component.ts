import { Component, OnInit } from '@angular/core';
import { ThemeModeService } from './common/services/theme-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private readonly themeModeService: ThemeModeService) {}

  ngOnInit(): void {
    this.themeModeService.syncThemeMode();
  }
}
