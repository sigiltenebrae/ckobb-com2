import { Component, OnInit } from '@angular/core';
import { projects } from "../../projects";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = projects;

  constructor() { }

  ngOnInit(): void {
    for (let project of projects) {
      project.hovered = false;
      project.unopen = false;
      project.unclose = false;
    }
  }

}
