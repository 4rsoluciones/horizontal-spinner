import {Component, EventEmitter} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const noop = () => {
};

@Component({
  selector: 'horizontal-spinner',
  inputs: ['options', 'width', 'align'],
  templateUrl: 'horizontal-spinner.html',
  outputs: ['selected'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: HorizontalSpinnerComponent, multi: true}]
})
export class HorizontalSpinnerComponent implements ControlValueAccessor {

  private innerValue: number;

  private onChangeCallback: (_: any) => void = noop;
  private onTouchedCallback: () => void = noop;

  options: any;
  width: number;
  align: string;

  selected = new EventEmitter();

  optionClicked(op) {
    if (this.value === op) {
      this.value = null;
    } else {
      this.value = op;
    }
  }

  get value(): any {
    return this.innerValue;
  };

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(value: number) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
