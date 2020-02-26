import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { IBrew } from '../models/brew.model';
import { BrewStatus } from '../enums/brew-status.enum';

const MOCK_BREWS: IBrew[] = [
  {
    abv: 5.5,
    description: "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
    name: "12th Of Never",
    fg: 1.011,
    ibu: 45,
    id: "zfP2fK",
    imageUrl: "https://brewerydb-images.s3.amazonaws.com/beer/zfP2fK/upload_nSMNjh-medium.png",
    og: 1.044,
    status: BrewStatus.NotStarted
  },
  {
    abv: 8.7,
    description: "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
    name: "A Little Sumpin' Extra",
    fg: 1.015,
    ibu: 85,
    id: "Au0v9G",
    imageUrl: "https://brewerydb-images.s3.amazonaws.com/beer/Au0v9G/upload_K1Zc5E-medium.png",
    og: 1.075,
    status: BrewStatus.NotStarted
  },
  {
    abv: 9.0,
    description: "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
    name: "Putin's Russian Imperial Stout",
    fg: 1.012,
    ibu: 75,
    id: "abc123",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Hammer_and_sickle_red_on_transparent.svg/240px-Hammer_and_sickle_red_on_transparent.svg.png",
    og: 1.075,
    status: BrewStatus.NotStarted,
    tastingNotes: "Tastes good n' stuff."
  }
];

@Injectable({
  providedIn: 'root'
})
export class MyBrewsService {
  selectedBrew: BehaviorSubject<IBrew> = new BehaviorSubject(null);

  constructor() { }

  getMyBrews(): Observable<IBrew[]> {
    return of(MOCK_BREWS);
  }

  setSelectedBrew(brew: IBrew) {
    this.selectedBrew.next(brew);
  }

}
