import { Injectable } from '@angular/core';
import { CollectionReference } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afs: CollectionReference,
    
  ) { }

  test() {
    
  }
}
