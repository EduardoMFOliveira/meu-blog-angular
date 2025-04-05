import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredPosts = [
    {
      title: 'Minha Jornada no Decola Tech',
      excerpt: 'Como o bootcamp está transformando minha carreira',
      link: '/posts/1',
      category: 'Carreira'
    },
    {
      title: 'Dominando Angular',
      excerpt: 'Dicas essenciais para desenvolvimento frontend',
      link: '/posts/2',
      category: 'Tecnologia'
    }
  ];

  recentActivities = [
    'Novo artigo sobre TypeScript publicado',
    'Projeto de blog desenvolvido com Angular',
    'Certificação em Java concluída'
  ];
}