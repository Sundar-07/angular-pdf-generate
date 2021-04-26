import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfviewComponent } from './pdfview/pdfview.component';

const routes: Routes = [
  {path:'pdfview',component:PdfviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
