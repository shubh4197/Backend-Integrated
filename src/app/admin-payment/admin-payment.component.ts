import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
@Component({
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.css']
})
export class AdminPaymentComponent implements OnInit {

  constructor(private paymentService: PaymentService) { }
  transferFrom = '0x0';
  balance = '0 ETH';
  transferTo = '';
  amount = 0;
  ngOnInit() {
  }
  initAndDisplayAccount = () => {


  };

  sendMoney(event){
  }
}
