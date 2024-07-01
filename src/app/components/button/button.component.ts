import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ama-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `<section>
  <div class="example-label">{{ label }}</div>
  <div class="example-button-row">
    <div class="example-flex-container">
      <div class="example-button-container">
        <button mat-fab extended>
          <mat-icon>favorite</mat-icon>
          Basic
        </button>
      </div>
      <div class="example-button-container">
        <button mat-fab extended disabled>
          <mat-icon>favorite</mat-icon>
          Disabled
        </button>
      </div>
      <div class="example-button-container">
        <a mat-fab extended routerLink=".">
          <mat-icon>favorite</mat-icon>
          Link
        </a>
      </div>
    </div>
  </div>
</section>`,
  styleUrls: ['./button.scss'],
})
export class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
