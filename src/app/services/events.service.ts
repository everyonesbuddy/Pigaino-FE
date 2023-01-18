import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private client = createClient({
    space: environment.contentfulVolidaFilms.spaceId,
    accessToken: environment.contentfulVolidaFilms.token,
  });

  constructor(private http: HttpClient) {}

  getAllEvents(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type:
              environment.contentfulVolidaFilms.contentTypeIds.product,
          },
          query
        )
      )
      .then((res) => res.items);
  }

  getEvent(eventId: any): Promise<Entry<any>> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type:
              environment.contentfulVolidaFilms.contentTypeIds.product,
          },
          { 'sys.id': eventId }
        )
      )
      .then((res) => res.items[0]);
  }
}
