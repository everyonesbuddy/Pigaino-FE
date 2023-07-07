import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DealFlowService } from 'src/app/services/deal-flow.service';

@Component({
  selector: 'app-deal-flow-details',
  templateUrl: './deal-flow-details.component.html',
  styleUrls: ['./deal-flow-details.component.scss'],
})
export class DealFlowDetailsComponent implements OnInit {
  deal: any = [];

  constructor(
    private dealFlowSevice: DealFlowService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.dealFlowSevice.getDealFlow(id).then((deals) => {
        this.deal = deals;
      });
    });
  }
}
