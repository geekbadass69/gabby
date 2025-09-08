import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class Header {

@ViewChild('menuCheckbox') menuCheckbox!: ElementRef<HTMLInputElement>;

  constructor(private titleService: Title, private metaService: Meta) {}

    closeMenu() {
    if (this.menuCheckbox) {
      this.menuCheckbox.nativeElement.checked = false;
    }
  }

  // overlayVisible = false;       // Controls whether overlay is in DOM
  // overlayFadeIn = false;        // Controls fade-in animation
  // overlayFadeOut = false;       // Controls fade-out animation

  // openOverlay() {
  //   this.overlayVisible = true;
  //   // Delay to trigger fade-in after DOM insertion
  //   setTimeout(() => {
  //     this.overlayFadeIn = true;   // Start fade-in
  //   }, 10); // Small delay to ensure DOM is rendered
  // }

  // closeOverlay() {
  //   this.overlayFadeIn = false;    // Start fade-out
  //   this.overlayFadeOut = true;    // Apply fade-out class
  //   setTimeout(() => {
  //     console.log('Fade-out complete, removing overlay from DOM');
  //     this.overlayFadeOut = false; // Reset fade-out class
  //     this.overlayVisible = false; // Remove overlay from DOM
  //   }, 10); // Match with CSS transition duration
  // }
    changeContactTitle()
    {
    this.titleService.setTitle('Contact Gabby | bodybyher');
    this.metaService.updateTag({ name: 'description', content: 'Contact Gabby at bodybyher for personalized training and fitness coaching.' });
    }

    ChangeHomeTitle()
    {
    this.titleService.setTitle('Gabby More BodyBuilder | bodybyher');
    this.metaService.updateTag({ name: 'description', content: 'Home page of Gabby More BodyBuilder at bodybyher.' });
    }

}
