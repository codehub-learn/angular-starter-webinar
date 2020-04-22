import { Component, OnInit } from '@angular/core';

interface Course {
  title: string;
  description: string;
  scheduleDate?: Date;
  price?: number;
  image: string;
}

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  selectedCourse: Course;

  courses: Course[] = [
    {
      title: 'Angular',
      description: 'This code.learn program covers introductory and advanced Angular topics through extensive hands-on sessions and guidance from senior developers.',
      price: 320,
      image: 'Digital-Angular1.jpg'
    },
    {
      title: 'Python-AI & ML',
      description: 'Python-AI & ML',
      price: 360,
      image: 'Digital-Python1.jpg'
    },
    {
      title: 'Architecting on AWS',
      description: 'Participants will have a unique hands-on experience by using  cutting edge AWS technologies and AWS platform features.',
      scheduleDate: new Date(2018, 3, 10),
      price: 780,
      image: 'Architecting-on-AWS.jpg'
    },
    {
      title: 'Docker & Kubernetes',
      description: 'Docker & Kubernetes',
      scheduleDate: new Date(2018, 4, 10),
      price: 350,
      image: 'docker-kubernetes.jpg'
    },
    {
      title: 'Microservices with Spring Boot & Spring Cloud',
      description: 'Microservices with Spring Boot & Spring Cloud',
      scheduleDate: new Date(2019, 4, 10),
      price: 400,
      image: 'spring-cloud.png'
    },
    {
      title: 'Ansible & Terraform',
      description: 'Ansible & Terraform',
      scheduleDate: new Date(2019, 8, 20),
      price: 300,
      image: 'mastering.png'
    },
    {
      title: 'Advanced Selenium Automation Testing',
      description: 'Advanced Selenium Automation Testing',
      scheduleDate: new Date(2020, 8, 20),
      price: 350,
      image: 'selenium.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
