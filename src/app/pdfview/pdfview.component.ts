import { Content } from '../shared/content';
import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ItemService } from '../shared/master.service';

import { jsPDF } from "jspdf";


@Component({
  selector: 'app-pdfview',
  templateUrl: './pdfview.component.html',
  styleUrls: ['./pdfview.component.css']
})
export class PdfviewComponent implements OnInit {

  @ViewChild('content',{static:true}) el!:ElementRef;

  contents: Content[] = [];

  constructor(private service: ItemService) { }

  ngOnInit(): void {

    this.service.getItems().subscribe(items => {
      //console.log(items);
      this.contents = items;
    
    });
  }

  makePDF()
{
  let pdf = new jsPDF('l','pt','a4');
  pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
      pdf.save("demo.pdf");
    }
  
  })

}
}
