import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-back-to-top',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.scss',
    animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class BackToTop {

   isShown = false;

   faArrowUp = faArrowUp;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show button after scrolling down 100px
    this.isShown = window.pageYOffset > 100;
  }

    scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
