import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  public countSubject:BehaviorSubject<number>=new BehaviorSubject(0);
}
