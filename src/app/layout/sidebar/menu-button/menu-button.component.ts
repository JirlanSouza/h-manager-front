import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../../../common/components/icon/icon.component';

@Component({
  selector: 'menu-button',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss',
})
export class MenuButtonComponent {
  @Input({ required: true })
  label = '';

  @Input({ required: true })
  icon = '';

  @Input({ required: true })
  isFull = false;

  @Input()
  selected = false;
}
