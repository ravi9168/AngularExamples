import { NgModule } from '@angular/core';
import {MatInputModule,MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule, MatButtonModule, MatButtonToggleModule,MatToolbarModule,MatSidenavModule,MatListModule} from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';





const material= [MatButtonModule,MatSliderModule,MatButtonToggleModule,MatIconModule
  ,MatBadgeModule,MatProgressSpinnerModule,MatToolbarModule,MatSidenavModule,MatListModule,
  MatInputModule,MatPaginatorModule,MatSortModule,
  MatTableModule,MatCardModule,
  MatFormFieldModule];

@NgModule({
 
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
