import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataFilterPipe } from '../tables/components/dataTables/data-filter.pipe';
import { CKEditorModule } from 'ng2-ckeditor';
import { HotTable, HotTableModule } from 'ng2-handsontable';

import { InfraComponent } from './infra.component';
import { routing } from './infra.routing';

import { PopularApp } from './popularApp';
import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { UsersMap } from './usersMap';
import { LineChart } from './lineChart';
import { Feed } from './feed';
import { Calendar } from './calendar';
import { SmartTables } from './smartTables';
import { CalendarService } from './calendar/calendar.service';
import { FeedService } from './feed/feed.service';
import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { UsersMapService } from './usersMap/usersMap.service';
import { SmartTablesService } from './smartTables/smartTables.service';
import { Ckeditor } from './ckeditor';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    Ng2SmartTableModule,
    CKEditorModule,
    routing,
  ],
  declarations: [
    PopularApp,
    PieChart,
    TrafficChart,
    UsersMap,
    LineChart,
    Feed,
    Calendar,
    SmartTables,
    Ckeditor,
    InfraComponent,

  ],
  providers: [
    CalendarService,
    FeedService,
    LineChartService,
    PieChartService,
    TrafficChartService,
    SmartTablesService,
    UsersMapService,
  ]
})
export class InfraModule {}
