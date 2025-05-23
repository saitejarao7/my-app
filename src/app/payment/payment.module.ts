import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { CodComponent } from './cod/cod.component';
import { UpiComponent } from './upi/upi.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    CodComponent,
    UpiComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
