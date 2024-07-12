import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'freida-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, NgClass],
  template: `
  @if (!link) {
  <button mat-flat-button
  [color]='buttonTheme'
  [disabled]="disabled"
  [ngClass]='{
    "mat-mdc-unelevated-button__rounded" : isRounded,
    "mat-mdc-unelevated-button__small" : small
  }'>
  {{ text }}
  </button>
  }
  @if (link) {
  <a mat-flat-button
  [href]="url"
  [color]='buttonTheme'
  [disabled]="disabled"
  [ngClass]='{
    "mat-mdc-unelevated-button__rounded" : isRounded,
    "mat-mdc-unelevated-button__small" : small
  }'
  target="_blank">
  {{ text }}
  </a>
  }
`,
  styleUrls: ['./button.scss'],
})
export class ButtonComponent {

  public materialCssClass: string = "mat-mdc-unelevated-button__rounded"

  @Output() public buttonClick = new EventEmitter<any>();
  @Input() public text: string = '';
  @Input() public buttonType = 'submit';
  @Input() public link = false;
  @Input() public externalLink = false;
  @Input() public buttonTheme: string = 'primary';
  @Input() public url: string = '';
  @Input() public fontSize = '1em';
  @Input() public iconName: any = false;
  @Input() public isRounded = true;
  @Input() public small = false;
  @Input() public angled = false;
  @Input() public reverse = false;
  @Input() public disabled = false;
  @Input() public size = '';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.buttonTheme = 'primary' ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['freida-button', `freida-button--${this.size}`, mode];
  }

}
