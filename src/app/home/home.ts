import { Component } from '@angular/core';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
constructor(private title: Title, private meta:Meta) {
    this.title.setTitle('Garage car maintenance'); // غيّر العنوان هنا
     this.meta.addTags([
    { name: 'description', content: '' },
    { name: 'keywords', content: '' }
  ]);
  }
}
