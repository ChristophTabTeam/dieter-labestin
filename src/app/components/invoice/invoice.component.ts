import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Invoice } from 'src/app/shared/interfaces/invoice';
import { Customer } from 'src/app/shared/interfaces/customer';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoices: Invoice[] = []
  customers: Customer[] = []
  displayedColumns: string[] = ['status', 'number', 'customer', 'date', 'amount'];
  invoiceCount: number

  constructor(
    private dataService: DataService,
    private cd: ChangeDetectorRef,
  ) { 
    this.dataService.getInvoices().subscribe(res => {
      this.invoices = res
      this.cd.detectChanges()
    })
    this.dataService.getCustomers().subscribe(res => {
      this.customers = res
      this.cd.detectChanges()
    })
  }

  ngOnInit(): void {
  }

  createInvoice() {

    this.dataService.addInvoice()
  }

}
