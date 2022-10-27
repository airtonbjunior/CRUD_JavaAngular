import { Observable } from 'rxjs';
import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>; // the $ at the variable name is a notation used in Observables
  displayedColumns = ['name', 'category']; // wich columns i'll display

  // Dependecy injection
  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.list();
  }

  ngOnInit(): void {

  }

}
