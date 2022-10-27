import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { delay, first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json'

  // We'll use this httpClient to call the API in the future
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(), // closes the connection after use (it's not a streaming, it's a json (at least now). We can use take(1) too)
      delay(60000), // just to test the loading spinner
      tap(courses => console.log(courses))
    );
  }
}
