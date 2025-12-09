import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';

// Components
import { NavbarComponents } from '../components/navbar/navbar-components';
import { ToggleSidebar } from '../services/toggle-sidebar';
import { SidebarComponent } from '../components/sidebar/sidebar-component';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet, MatSidenavModule, NavbarComponents, SidebarComponent],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {
  public toggleSidebar = inject(ToggleSidebar);
}
