import {Component, forwardRef, OnInit, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

let VALUE_ACCESSOR: Provider;
VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => {
        return SwitchComponent;
    }),
    multi: true
};

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
    providers: [VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor {
    state = 'off';

    private onChange = (value: any) => {};

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
    }

    setDisabledState(isDisabled: boolean): void {
    }

    writeValue(state: string): void {
        this.state = state;
    }

  setState(state: string) {
      this.state = state;
      this.onChange(this.state);
  }
}
