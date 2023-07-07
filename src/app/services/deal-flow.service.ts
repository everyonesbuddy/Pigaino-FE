import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DealFlowService {
  private client = createClient({
    space: environment.contentfulPigainoDealFlow.spaceId,
    accessToken: environment.contentfulPigainoDealFlow.token,
  });

  constructor(private http: HttpClient) {}

  getDealFlows(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type:
              environment.contentfulPigainoDealFlow.contentTypeIds.product,
          },
          query
        )
      )
      .then((res) => res.items);
  }

  getDealFlow(eventId: any): Promise<Entry<any>> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type:
              environment.contentfulPigainoDealFlow.contentTypeIds.product,
          },
          { 'sys.id': eventId }
        )
      )
      .then((res) => res.items[0]);
  }
}
