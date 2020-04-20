import { Component, OnInit } from '@angular/core';

interface Course {
  title: string;
  description: string;
  scheduleDate?: string;
  price?: number;
  image: string;
}

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

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
      scheduleDate: 'February 2020',
      price: 780,
      image: 'Architecting-on-AWS.jpg'
    },
    {
      title: 'Docker & Kubernetes',
      description: 'Docker & Kubernetes',
      scheduleDate: 'March 2020',
      price: 350,
      image: 'docker-kubernetes.jpg'
    },
    {
      title: 'Microservices with Spring Boot & Spring Cloud',
      description: 'Microservices with Spring Boot & Spring Cloud',
      scheduleDate: 'April 2020',
      price: 400,
      image: 'spring-cloud.png'
    },
    {
      title: 'Ansible & Terraform',
      description: 'Ansible & Terraform',
      scheduleDate: 'April 2020',
      price: 300,
      image: 'mastering.png'
    },
    {
      title: 'Advanced Selenium Automation Testing',
      description: 'Advanced Selenium Automation Testing',
      scheduleDate: 'April 2020',
      price: 350,
      image: 'selenium.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
