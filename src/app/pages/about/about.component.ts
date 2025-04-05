import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  profile = {
    name: 'Eduardo Mendes de Oliveira',
    role: 'Desenvolvedor FullStack',
    bio: 'Participante ativo do Bootcamp Decola Tech Avanade 2025 | Especialização em Angular e Spring Boot',
    links: {
      github: 'https://github.com/EduardoMFOliveira',
      linkedin: 'https://www.linkedin.com/in/eduardo-mendesfdo/'
    }
  };

  decolaTechStack = {
    frontend: ['Angular 17', 'TypeScript', 'RxJS', 'HTML5/CSS3', 'Angular Material'],
    backend: ['Java 17', 'Spring Boot 3', 'REST APIs', 'JPA/Hibernate', 'JWT'],
    devops: ['Git/GitHub', 'Docker', 'Azure DevOps', 'SCRUM'],
    databases: ['SQL Server', 'MySQL', 'MongoDB']
  };
}