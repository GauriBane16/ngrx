import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatCardModule, MatIconModule, MatProgressSpinnerModule,MatFormFieldModule,MatInputModule } from '@angular/material';


const data=[MatToolbarModule,MatButtonModule,MatCardModule,MatProgressSpinnerModule,MatIconModule,MatFormFieldModule,
  MatInputModule]
@NgModule({
  imports:data,
  exports:data
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
})
export class MaterialModule { }
