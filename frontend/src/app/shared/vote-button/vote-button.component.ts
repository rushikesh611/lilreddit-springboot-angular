import { Component, Input } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from '../post-model';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent {
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faComments = faComments;

  @Input() post!: PostModel;

  constructor() { }
}
