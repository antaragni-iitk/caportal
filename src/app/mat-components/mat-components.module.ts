import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatTooltipModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatSnackBarModule, MatDividerModule, MatTabsModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDividerModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule
  ]
})
export class MatComponentsModule { }
