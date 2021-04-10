import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any
  constructor( private spacexApiService: SpacexapiService, private activatedRoute: ActivatedRoute,
               private router: Router) {

  }

  onClick(): void{
    this.router.navigate(['/missiondetails'])
  }


  ngOnInit(): void {
    this.spacexApiService.sendGetRequest().subscribe(data => {
      this.missions = data

    })
  }

}