import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customer';
import { Article, Invoice, Position } from '../interfaces/invoice';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private fireStore: Firestore,
  ) { }

  //Invoices
  getInvoices(): Observable<Invoice[]> {
    const invoiceRef = collection(this.fireStore, 'invoices')
    return collectionData(invoiceRef, { idField: 'id'}) as Observable<Invoice[]>
  }

  getInvoiceById(id: string): Observable<Invoice> {
    const invoiceDocRef = doc(this.fireStore, `invoices/${id}`)
    return docData(invoiceDocRef, { idField: 'id' }) as Observable<Invoice>
  }

  addInvoice(invoice: Invoice, id: string) {
    const invoicesRef = collection(this.fireStore, 'invoices')
    return setDoc(doc(invoicesRef, id), invoice)
  }

  deleteInvoice(invoice: Invoice) {
    const invoiceDocRef = doc(this.fireStore, `invoices/${invoice.id}`)
    return deleteDoc(invoiceDocRef)
  }

  updateInvoice(invoice: Invoice) {
    const invoiceDocRef = doc(this.fireStore, `invoices/${invoice.id}`)
    return updateDoc(invoiceDocRef, {

    })
  }

  //Customer
  getCustomers(): Observable<Customer[]> {
    const customersRef = collection(this.fireStore, 'customers')
    return collectionData(customersRef, { idField: 'id'}) as Observable<Customer[]>
  }

  //Articles
  getArticles(): Observable<Article[]> {
    const articlesRef = collection(this.fireStore, 'articles')
    return collectionData(articlesRef, { idField: 'id'}) as Observable<Article[]>
  }

  //Positions
  getPositionsByInvoiceId(id: string): Observable<Position[]> {
    const positionsRef = collection(this.fireStore, `invoices/${id}/positions`)
    return collectionData(positionsRef, {idField: 'id'}) as Observable<Position[]>
  }
}