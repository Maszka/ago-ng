import { MapService } from './map.service';
import { NgModule } from '@angular/core';

import { MapComponent } from './map.component';
import {AgmCoreModule} from '@agm/core';



@NgModule({
  declarations: [
    MapComponent

  ],
  exports: [
      MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey:'AIzaSyC5lcYI63ZPk5kzAHYFmW5wjLDP8AVev6E'
    })
  ],
  providers: [MapService],

})
export class MapModule { }
