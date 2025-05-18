import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'mf-remote-remote-entry',
  template: `<mf-remote-nx-welcome></mf-remote-nx-welcome>`,
})
export class RemoteEntryComponent {}
