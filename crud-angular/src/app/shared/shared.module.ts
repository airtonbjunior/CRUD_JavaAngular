import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';


@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [ // I'm using exports because I'll use the ErrorDialogComponent on another module
    ErrorDialogComponent
  ]
})
export class SharedModule { }
