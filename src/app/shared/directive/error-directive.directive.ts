import {
  AfterViewInit,
  ContentChild,
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { FormControlName, ValidationErrors } from '@angular/forms';
import { filter } from 'rxjs';
import { ErrorFormService } from '../../services/manageErrors/error-form.service';

@Directive({
  selector: '[appErrorDirective]',
})
export class ErrorDirectiveDirective implements AfterViewInit {
  @ContentChild(FormControlName) input?: FormControlName;

  constructor(
    private _element: ElementRef,
    private _errorFormService: ErrorFormService,
    private renderer: Renderer2
  ) {}
  ngAfterViewInit(): void {
    this._listenErrorChanges();
  }

  private _listenErrorChanges(): void {
    this.input?.control.statusChanges
      .pipe(filter(() => !!this.input?.control.touched))
      .subscribe(() => {
        if (this.input?.control.errors && this.input.touched)
          this._sendErrorMessage(this.input?.control.errors);
      });
  }

  private _sendErrorMessage(controlErrors: ValidationErrors) {
    const mat_error = this.renderer.createElement('mat-error');
    const text = this.renderer.createText(
      this._errorFormService.getErrorMessage(controlErrors)
    );
    mat_error.appendChild(text);
    this._element.nativeElement.lastChild.appendChild(mat_error);
  }
}
