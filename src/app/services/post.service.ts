import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    {
      id: 4,
      title: 'Minha Jornada no Decola Tech Avanade 2025',
      excerpt: 'Experiência completa no programa de formação da Avanade',
      content: `Participar do Decola Tech tem sido uma experiência transformadora...`,
      author: 'Eduardo',
      date: new Date('2024-05-25'),
      tags: ['Avanade', 'Bootcamp', 'Carreira'],
      readTime: 8,
      imageUrl: 'assets/images/decola-tech.jpg'
    }
  ];

  getPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find(post => post.id === id);
  }

  createPost(post: Omit<Post, 'id' | 'date'>): Post {
    const newPost: Post = {
      ...post,
      id: this.posts.length + 1,
      date: new Date()
    };
    this.posts.push(newPost);
    return newPost;
  }
}