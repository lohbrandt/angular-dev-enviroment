import { Component, Input } from '@angular/core';

@Component({
  selector: 'myInput',
  styleUrls: ['./input.component.css'],
  templateUrl: './input.component.html',
})
export class MyInputComponent {
  username = 'Hans';

  onSubmit(formValue: Record<string, string>) {
    console.info(formValue);
  }
}
