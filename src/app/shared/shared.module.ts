import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorDirectiveDirective } from './directive/error-directive.directive';
import { DisplayBooleanPipe } from './pipe/display-boolean.pipe';
import { DisplayDatePipe } from './pipe/display-date.pipe';
const EXPORTED_MODULES = [CommonModule];
const EXPORTED_PIPES = [DisplayBooleanPipe, DisplayDatePipe];
@NgModule({
  declarations: [EXPORTED_PIPES, ErrorDirectiveDirective],
  imports: [EXPORTED_MODULES],
  exports: [EXPORTED_MODULES, EXPORTED_PIPES, ErrorDirectiveDirective],
})
export class SharedModule {}
