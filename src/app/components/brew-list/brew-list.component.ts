import { Component, OnInit, Input } from '@angular/core';
import { IBrew } from 'src/app/models/brew.model';
import { MyBrewsService } from 'src/app/services/my-brews.service';

@Component({
  selector: 'app-brew-list',
  templateUrl: './brew-list.component.html',
  styleUrls: ['./brew-list.component.scss']
})
export class BrewListComponent implements OnInit {
  @Input() brews: IBrew[];
  @Input() selectedBrew: IBrew;

  constructor(private myBrewsService: MyBrewsService) { }

  ngOnInit(): void {
  }

  onSelect(event: MouseEvent, brew: IBrew): void {
    event.preventDefault();
    this.myBrewsService.setSelectedBrew(brew);
  }

}
