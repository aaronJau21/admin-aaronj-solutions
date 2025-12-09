import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleSidebar {
  public toggle = signal<boolean>(false);

  public toggleSidebar(): void {
    this.toggle.set(!this.toggle());
  }
}
