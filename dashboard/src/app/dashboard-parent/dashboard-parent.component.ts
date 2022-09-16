import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
@Component({
  selector: 'app-dashboard-parent',
  templateUrl: './dashboard-parent.component.html',
  styleUrls: ['./dashboard-parent.component.css']
})



export class DashboardParentComponent implements OnInit {
  deviceInfo:DeviceInfo | undefined;
  deviceType = 'device-detection-sample';
  constructor(private deviceDetectorService: DeviceDetectorService) {
   }

  ngOnInit(): void {
    alert("Make Sure your device is Desktop")
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
    this.deviceType = this.deviceInfo.deviceType
  }

}
