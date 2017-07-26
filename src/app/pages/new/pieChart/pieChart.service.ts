import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  newVisits: number = 700;
  fbPercent: number = 90;

  constructor(private _baConfig:BaThemeConfigProvider) {


  }

  getData() {
    const pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'dashboard.new_visits',
        stats: this.newVisits,
        icon: 'person',
        percent: 10,
      }, {
        color: pieColor,
        description: 'dashboard.purchases',
        stats: '$ 89,745',
        icon: 'money',
        percent: this.fbPercent,
      }, {
        color: pieColor,
        description: 'dashboard.active_users',
        stats: '178,391',
        icon: 'face',
        percent: this.fbPercent,
      }, {
        color: pieColor,
        description: 'dashboard.returned',
        stats: '32,592',
        icon: 'refresh',
        percent: this.fbPercent,
      }
    ];
  }
}
