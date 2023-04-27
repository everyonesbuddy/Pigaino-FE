import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { FreeContentService } from 'src/app/services/free-content.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-free-classes',
  templateUrl: './free-classes.component.html',
  styleUrls: ['./free-classes.component.scss'],
})
export class FreeClassesComponent implements OnInit {
  contents: Entry<any>[] = [];

  constructor(
    private freeContentService: FreeContentService,
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    //check subscription status
    this.subscriptionService.getSubscriptionStatus();

    //get all events
    this.freeContentService.getAllFreeContent().then((contents) => {
      this.contents = contents;
      console.log('content', this.contents);
    });
  }

  freeClassPage(id: any) {
    this.router.navigate(['/freeClassPage/' + id]);
  }
}
