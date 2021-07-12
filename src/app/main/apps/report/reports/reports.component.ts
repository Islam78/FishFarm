import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  private _unsubscribeAll: Subject<any>;
  currentUser: any;
  Farm_name: any;
  dataList: any[];
  constructor(
    private ActiveRoute: ActivatedRoute,
    private http: HttpClient,
    private _coreMenuService: CoreMenuService
  ) {
    this._unsubscribeAll = new Subject();
  }
  ngOnInit(): void {
    this.ActiveRoute.params.subscribe(a => this.Farm_name = a.id);
    this._coreMenuService.onMenuChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
      this.currentUser = this._coreMenuService.currentUser;
    })
  }
  pageSizes = 15
  isLoading = true
  ChartType = 'line'
  ChangeChart(event) {
    console.log(event);

    this.ChartType = event.value
  }
  GetData(DateFrom, DateTo) {
    let data = {
      User_code: this.currentUser.usercode,
      Farm_name: this.Farm_name,
      Start_Date: DateFrom,
      End_Date: DateTo
    }
    this.http.post(`${environment.apiUrl}user/reports`, data).subscribe((res: any) => {
      if (res.result.length > 0) {
        this.dataList = res.result
        this.isLoading = false
        if (res.result[0]) {
          this.PH_sensor = []
          this.Temperature_sensor = []
          this.leng = []
          this.Sensors = res.result
          this.ShowChart = true
        }
        for (let index = 0; index < this.Sensors.length; index++) {
          this.leng.push(this.Sensors[index].date.slice(0, 9))
          this.PH_sensor.push(this.Sensors[index].PH_sensor)
          this.Temperature_sensor.push(this.Sensors[index].Temperature_sensor)
        }
        this.MakeData();
      }
    })
  }
  options;
  data: any
  ShowChart = false;
  Sensors: any = new Array<any>();
  leng: any = new Array<Date>();
  PH_sensor: any = new Array<any>();
  Temperature_sensor: any = new Array<any>();
  MakeData() {
    this.data = {
      labels: this.leng,
      datasets: [
        {
          label: 'PH',
          data: this.PH_sensor,
          fill: false,
          zoom: true,
          borderColor: '#4bc0c0'
        },
        {
          label: 'temperature',
          data: this.Temperature_sensor,
          fill: false,
          zoom: true,
          borderColor: 'red'
        }
      ]
    }
    this.options = {
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            display: true,
            position: 'left',
            type: "linear",
            scaleLabel: {
              display: true,
              labelString: 'USD',
              beginAtZero: true,
            },
            id: "id1"
          },
          {
            scaleLabel: {
              display: true,
              labelString: 'Commissions',
              beginAtZero: true,
            },
            display: true, // Hopefully don't have to explain this one.
            type: "linear",
            position: "right",
            gridLines: {
              display: true
            },
            id: "id2"
          }
        ],
        zoom: {
          enabled: true,
          drag: false,
        }
      }
    };
  }
  onSubmit(f: FormGroup) {
    console.log(f.value);
    this.GetData(f.value.Start_Date, f.value.End_Date)
  }

}
