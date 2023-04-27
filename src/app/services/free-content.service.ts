import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FreeContentService {
  private client = createClient({
    space: environment.contentfulPigainoFreeContent.spaceId,
    accessToken: environment.contentfulPigainoFreeContent.token,
  });

  constructor() {}
  getAllFreeContent(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type:
              environment.contentfulPigainoFreeContent.contentTypeIds.product,
          },
          query
        )
      )
      .then((res) => res.items);
  }

  getFreeContent(eventId: any): Promise<Entry<any>> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type:
              environment.contentfulPigainoFreeContent.contentTypeIds.product,
          },
          { 'sys.id': eventId }
        )
      )
      .then((res) => res.items[0]);
  }
}
