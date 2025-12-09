import { Component, inject } from '@angular/core';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToggleSidebar } from '../../services/toggle-sidebar';

@Component({
  selector: 'navbar',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './navbar-components.html',
  styleUrl: './navbar-components.css',
})
export class NavbarComponents {
  public toggleSidebar = inject(ToggleSidebar);
}
