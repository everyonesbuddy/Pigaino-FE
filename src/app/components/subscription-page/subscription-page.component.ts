import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss'],
})
export class SubscriptionPageComponent implements OnInit {
  constructor(
    private subscriptionService: SubscriptionService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getSubscriptionInfo();
  }

  getSubscriptionInfo() {
    this.http
      .get('https://pigaino-be.herokuapp.com/api/prices')
      .subscribe((response) => {
        return response;
      });
  }
}
