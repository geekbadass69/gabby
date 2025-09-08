import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { BackToTop } from './layout/back-to-top/back-to-top';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, BackToTop],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  constructor(private titleService: Title, private metaService: Meta) {}
    ngOnInit() {
    // Set page title
    this.titleService.setTitle('Gabby More BodyBuilder | bodybyher');

    // Set meta description
    this.metaService.updateTag({ name: 'description', content: 'Contact Gabby at bodybyher for personalized training and fitness coaching.' });

    // You can add other meta tags similarly
    // this.metaService.updateTag({ name: 'keywords', content: 'fitness, personal trainer, contact' });
  }
}
