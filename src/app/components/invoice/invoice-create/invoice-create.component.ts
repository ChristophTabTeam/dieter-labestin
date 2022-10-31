import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/shared/interfaces/customer';
import { Article, Invoice, Position } from 'src/app/shared/interfaces/invoice';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.scss'],
})
export class InvoiceCreateComponent implements OnInit {
  invoiceForm = new FormGroup({
    status: new FormControl(''),
    customer: new FormControl('', Validators.required),
    amount: new FormControl(''),
    country: new FormControl('', Validators.required),
    subject: new FormControl('Rechnung Nr. ', Validators.required),
    invoiceNumber: new FormControl('', Validators.required),
    invoiceDate: new FormControl('', Validators.required),
    shipmentDate: new FormControl('', Validators.required),
    dueDays: new FormControl(''),
  })
  positionForm = new FormGroup({
    position: new FormControl(''),
    name: new FormControl(''),
    amount: new FormControl(''),
    unit: new FormControl('Stk.'),
    price: new FormControl(''),
    discount: new FormControl(''),
    discountUnit: new FormControl('%'),
  })

  invoices: Invoice[] = []
  customers: Customer[] = []
  articles: Article[] = []
  positions: Position[] = []
  positionCount: number = 1

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
    this.dataService.getArticles().subscribe(res => {
      this.articles = res
      this.cd.detectChanges()
    })
  }

  ngOnInit(): void {
  }

}
