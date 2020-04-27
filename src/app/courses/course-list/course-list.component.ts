import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  selectedCourse: Course;

  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.get();
  }

}
