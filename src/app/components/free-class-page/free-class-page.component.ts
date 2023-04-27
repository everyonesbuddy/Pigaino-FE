import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FreeContentService } from 'src/app/services/free-content.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { TalkService } from 'src/app/services/talk.service';
import Talk from 'talkjs';

@Component({
  selector: 'app-free-class-page',
  templateUrl: './free-class-page.component.html',
  styleUrls: ['./free-class-page.component.scss'],
})
export class FreeClassPageComponent implements OnInit {
  content: any = [];
  private inbox: Talk.Inbox | any;
  private session: Talk.Session | any;

  @ViewChild('talkjsContainer') talkjsContainer!: ElementRef;

  constructor(
    private subscriptionService: SubscriptionService,
    private freeContentService: FreeContentService,
    private activatedRoute: ActivatedRoute,
    private talkService: TalkService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.freeContentService.getFreeContent(id).then((contents) => {
        this.content = contents;
      });
    });
    this.createInbox();
  }

  private async createInbox() {
    const session = await this.talkService.createCurrentSession();
    this.inbox = await this.talkService.createInbox(session);
    // this.inbox.mount(this.talkjsContainer.nativeElement);
    setTimeout(
      function (thisobj: any) {
        thisobj.inbox.mount(thisobj.talkjsContainer.nativeElement);
      },
      3000,
      this
    );
  }
}
