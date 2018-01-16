import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HorizontalSpinnerComponent} from './horizontal-spinner';
import {CommonModule} from "@angular/common";
import {IonicModule} from "ionic-angular";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [HorizontalSpinnerComponent],
  exports: [HorizontalSpinnerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HorizontalSpinnerModule {
}
