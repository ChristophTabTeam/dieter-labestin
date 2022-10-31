import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Invoice } from 'src/app/shared/interfaces/invoice';
import { Customer } from 'src/app/shared/interfaces/customer';
import { Router } from '@angular/router';

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
    private router: Router,
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
    const length = this.invoices.length
    const invoiceCount = length + 1
    const invoiceNumber = () => {
      if (invoiceCount.toString().length < 2) {
        return 'RE1000' + invoiceCount.toString()
      } else if (invoiceCount.toString().length < 3) {
        return 'RE100' + invoiceCount.toString()
      } else {
        return 'RE10' + invoiceCount.toString()
      }
    }
    const invoice = {
      status: "Entwurf",
      customer: "Test",
      createdDate: "",
      amount: "",
      sendDate: "",
    }
    this.dataService.addInvoice(invoice, invoiceNumber())
    this.router.navigate([`invoice/new/${invoiceNumber()}`])
  }

}
