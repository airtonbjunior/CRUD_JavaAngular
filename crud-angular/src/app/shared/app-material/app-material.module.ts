import { NgModule } from '@angular/core';

// This file is used to centralize the shared imports of external Modules
// Almost all modules are using the same components, so this file is used to import this modules and...
// ...share with all modules (it's just necessary import the AppMaterialModule)
// Idea: Loiane Groner

import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AppMaterialModule { }
