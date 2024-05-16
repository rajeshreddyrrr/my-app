import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../ApiService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})


export class AppComponent {
  title = 'my-app';
  dataSource: any[] = [];
  constructor(private apiService: ApiService) { }

 

  ngOnInit() {
    this.apiService.getBKValues().subscribe((data: any[]) => {
      this.dataSource = data;
    });
  }

  
  displayedColumns: string[] = ['bKDate', 'bKPaidToFrom', 'check', 'bKAccNo', 'bkPaymentMethodId', 'bkCategory', 'bkFilename', 'bkNotes', 'bkgbp', 'bkeur', 'bkusd', 'bkvat', 'bkFees', 'bkInvoiceDate','bkRecChk','bkLastRec','bkRecDate','actions'];

}

