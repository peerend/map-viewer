import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }

//@Component({
//    selector: 'my-mapp',
//    template: new ol.Map({
//        view: new ol.View({
//            center: [0, 0],
//            zoom: 1
//        }),
//        layers: [
//            new ol.layer.Tile({
//                souce: new ol.souce.OSM()
//            })
//        ],
//        target: 'map'
//    })
//})
