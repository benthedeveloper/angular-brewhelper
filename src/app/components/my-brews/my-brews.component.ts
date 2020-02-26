import { Component, OnInit } from '@angular/core';
import { MyBrewsService } from 'src/app/services/my-brews.service';
import { IBrew } from 'src/app/models/brew.model';

@Component({
  selector: 'app-my-brews',
  templateUrl: './my-brews.component.html',
  styleUrls: ['./my-brews.component.scss']
})
export class MyBrewsComponent implements OnInit {
  myBrews: IBrew[];
  selectedBrew: IBrew;

  constructor(private myBrewsService: MyBrewsService) { }

  ngOnInit(): void {
    this.myBrewsService.getMyBrews().subscribe(brews => this.myBrews = brews);

    this.myBrewsService.selectedBrew.subscribe(selectedBrew => this.selectedBrew = selectedBrew);
  }

}
