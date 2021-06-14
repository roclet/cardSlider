import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatSnackBarModule,
  MatMenuModule,
  MatIconModule,
  MatSelectModule,
  MatToolbarModule,
  MatToolbarModule,
  MatListModule,
  MatSliderModule,
];
@NgModule({
  imports: [modules],
  exports: [modules],
})
export class MaterialModule {}
