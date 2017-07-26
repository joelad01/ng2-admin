import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  newVisits: number = 700;
  fbPercent: number = 90;

  licenceCount: number = 5;
  computerCount: number = 3;
  revenueCount: any = '$52,000';
  utilisationCount: any = '80% utilised';

  constructor(private _baConfig:BaThemeConfigProvider) {


  }

  getData() {
    const pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'Licenses',
        stats: this.licenceCount,
        icon: 'person',
        percent: 33,
      }, {
        color: pieColor,
        description: 'Computers',
        stats: this.computerCount,
        icon: 'money',
        percent: 50,
      }, {
        color: pieColor,
        description: 'Revenue',
        stats: this.revenueCount,
        icon: 'money',
        percent: 12,
      }, {
        color: pieColor,
        description: 'Utilisation',
        stats: this.utilisationCount,
        icon: 'refresh',
        percent: 80,
      }
    ];
  }
}
