import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { DealFlowService } from 'src/app/services/deal-flow.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  contents: Entry<any>[] = [];
  recentStreams: Entry<any>[] = [];
  featuredActs: Entry<any>[] = [];

  constructor(
    private dealFlowSevice: DealFlowService,
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    //check subscription status
    this.subscriptionService.getSubscriptionStatus();

    //get all events
    // this.eventService.getAllEvents().then((contents) => {
    //   this.contents = contents;
    // });
    //get all events
    this.dealFlowSevice.getDealFlows().then((contents) => {
      this.contents = contents;
    });
  }

  dealFlowDetailPage(id: any) {
    this.router.navigate(['/dealsFlowDetailPage/' + id]);
  }
}
