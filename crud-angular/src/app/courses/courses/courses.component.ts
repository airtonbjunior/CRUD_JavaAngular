import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  // array to use as datasource - testing the table component (angular material)
  courses: Course[] = [
    {
      _id: '1',
      name: 'Angular',
      category: 'Frontend'
    }
  ];
  displayedColumns = ['name', 'category']; // wich columns i'll display

  constructor() { }

  ngOnInit(): void {
  }

}
