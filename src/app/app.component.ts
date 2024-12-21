import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

    public coreCourse = COURSES[0];
    public rxjsCourse =  COURSES[1];
    public ngrxCourse =  COURSES[2];


    public onCourseSelected(course:Course) {
        console.log("app Component- onCourseSelected event bubbled...", course);
    }
}
