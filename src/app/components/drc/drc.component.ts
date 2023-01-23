import { Component, OnInit } from '@angular/core'
import { CountryService } from 'src/app/services/country.service'

@Component({
  selector: 'app-drc',
  templateUrl: './drc.component.html',
  styleUrls: ['./drc.component.css'],
})
export class DRCComponent implements OnInit {
  countryContent = `
  CSquared acquired its Democratic Republic of Congo National licenses and officially started
   operating in the country in September, 2021. Csquared has acquired the National licenses
    to allow it to deploy, own and operate Metro fiber, FTTx and Long Haul networks in all
     regions of DRC. Csquared DRC has very recently acquired an existing fiber infrastructure 
     assets in the DRC spanning approximately 100km of optic fiber around the major areas of 
     Kinshasa with enough free ducts to accommodate for future expansions.

  In the Democratic Republic of Congo (DRC), CSquared now operates 100km of fiber
   in Kinshasa with Africell as anchor customer. An MoU with Société Congolaises des 
   Postes et Télécommunications (SCPT) will land the country's 2nd Submarine cable 
   and enhance the National fiber backbone network.
  `

  image="https://lovehomedesigns.com/wp-content/uploads/2022/01/cute-house-012522.jpg.webp"
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.setCountry('drc')
  }
}
