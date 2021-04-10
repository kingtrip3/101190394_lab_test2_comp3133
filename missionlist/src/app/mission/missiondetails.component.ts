import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent implements OnInit {
  lauchYear = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
  ];
  launchDataArray = [];
  isLoading = false;

  showFilter = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getAllLaunches();
  }

  getAllLaunches(): any {
    this.isLoading = true;
    this.appService.getAllLaunches().subscribe(
      (response: any) => {
        // console.log(response);
        this.launchDataArray = response;
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }

  filterLaunchPrograms(index: number, year: string): any {
    this.getFilteredLaunches(year);
    this.showFilter = true;
  }

  getFilteredLaunches(year: string): any {
    this.appService.getLaunchesByYear(year).subscribe(
      (response: any) => {
        this.launchDataArray = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  clearFilter(): void {
    this.getAllLaunches();

    this.showFilter = false;
  }
}
