import { NgModule } from '@angular/core';

// This file is used to centralize the shared imports of external Modules
// Almost all modules are using the same components, so this file is used to import this modules and...
// ...share with all modules (it's just necessary import the AppMaterialModule)
// Idea: Loiane Groner

import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ]
})
export class AppMaterialModule { }
