import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { EventsService } from 'src/app/services/events.service';
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
    private eventService: EventsService,
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    //check subscription status
    this.subscriptionService.getSubscriptionStatus();

    //get all events
    this.eventService.getAllEvents().then((contents) => {
      this.contents = contents;
    });
  }

  detailPage(id: any) {
    this.router.navigate(['/detailPage/' + id]);
  }
}
