import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
// import { ChartOptions } from 'chart.js';
import { ChartComponent } from 'ng-apexcharts';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {

  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { environment } from 'environments/environment';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  _unsubscribeAll: Subject<any>;
  currentUser
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(
    private ActiveRoute: ActivatedRoute,
    private http: HttpClient,
    private _coreMenuService: CoreMenuService
  ) {
    this._unsubscribeAll = new Subject();
    this._coreMenuService.onMenuChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
      this.currentUser = this._coreMenuService.currentUser;
    })
  }
  ngOnInit(): void {
    // this.ActiveRoute.params.subscribe(a => this.Farm_name = a.id);
    this._coreMenuService.onMenuChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
      this.currentUser = this._coreMenuService.currentUser;
    })
    setTimeout(() => {
      if (this.currentUser.usercode) {
        this.GetDataUser()
      } else if (this.currentUser.admin_code) {
        this.GetDataAdmin()
      }
    }, 700);
  }
  dataList: any[]
  isLoading: boolean = true
  dateList: any[] = []
  PHList: any[] = []
  AdminDataHome
  GetDataAdmin() {
    this.http.get(`${environment.apiUrl}get/adminhome`).subscribe((res: any) => {
      console.log('admindata', res);
      this.AdminDataHome = res
      this.InitChartAdmin()
    })

  }
  goalChartoptions
  InitChartAdmin() {
    this.goalChartoptions = {
      chart: {
        height: 200,
        type: 'radialBar',
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1
        }
      },
      colors: ['#978EF4'],
      plotOptions: {
        radialBar: {
          offsetY: -10,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '77%'
          },
          track: {
            background: '#ebe9f1',
            strokeWidth: '50%'
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              color: '#5e5873',
              fontSize: '2.86rem',
              fontWeight: '600'
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#978EF4'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      grid: {
        padding: {
          bottom: 30
        }
      }
    };
    setTimeout(() => {
      this.isLoading = false
    }, 200);
  }
  GetDataUser() {
    this.http.get(`${environment.apiUrl}get/userhome/suze1`).subscribe((res: any) => {
      if (res.result.length > 0) {
        this.dataList = res.result
        this.dataList.map(a => {
          this.dateList.push(a.date)
          this.PHList.push(a.PH_sensor)
        })
        this.GaidcartUser()
      }
    })
  }
  GaidcartUser() {
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: this.PHList
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
          'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 
        ]
      }
    };
    setTimeout(() => {
      this.isLoading = false
    }, 200);

  }


}
