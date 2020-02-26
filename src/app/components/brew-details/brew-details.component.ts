import { Component, OnInit, Input } from '@angular/core';
import { IBrew } from 'src/app/models/brew.model';

@Component({
  selector: 'app-brew-details',
  templateUrl: './brew-details.component.html',
  styleUrls: ['./brew-details.component.scss']
})
export class BrewDetailsComponent implements OnInit {
  @Input() brew: IBrew;

  constructor() { }

  ngOnInit(): void {
  }

}
