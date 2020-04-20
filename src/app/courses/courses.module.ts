import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';



@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule
  ],
  exports: [CourseListComponent]
})
export class CoursesModule { }
