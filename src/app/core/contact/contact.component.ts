import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-Contact',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FormsModule],
  templateUrl: './Contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}

