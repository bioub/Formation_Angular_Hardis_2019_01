import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DropdownComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownComponent,

    // ces modules n'ont plus a être réimportés, il suffit d'importer Shared
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class SharedModule { }
