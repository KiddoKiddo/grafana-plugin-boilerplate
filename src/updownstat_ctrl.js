import { MetricsPanelCtrl } from 'app/plugins/sdk';
import moment from 'moment';

import './css/style.css!';

export class UpDownStatCtrl extends MetricsPanelCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);
    this.updateClock();
  }

  updateClock() {
    this.time = moment().format('hh:mm:ss');
    this.$timeout(() => { this.updateClock(); }, 1000);
  }
}

UpDownStatCtrl.templateUrl = 'module.html';