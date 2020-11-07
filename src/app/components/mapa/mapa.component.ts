import { AfterViewInit, Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
/* lebreria de mapbox */
//import * as mapboxgl from 'mapbox-gl';
import { Marcador } from '../../classses/marcador.class';
/* libreria de lealeft */
import* as L from 'leaflet';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit {

  marcadores: Marcador[] = [];

  //mapbox
  //mapa:mapboxgl.Map;

  //leaflet
  mymap:L.map;
  marker:L.marker;


  constructor( private snackBar: MatSnackBar ) { 

    const nuevoMarcador = new Marcador(-12.1680, -76.9964);
    this.marcadores.push(nuevoMarcador);
    
  }

  ngAfterViewInit(): void {

    this.mymap = L.map('mapid').setView([-12.1680, -76.9964], 14);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: environment.mapboxkey
    }).addTo(this.mymap);

    this.agregarMarcador(-12.1680, -76.9964);
    

    this.mymap.on('click', ( e )=> {
      //const popup = L.popup();

      this.agregarMarcador(e.latlng.lat, e.latlng.lng); 


      /* popup.setLatLng(e.latlng)
           .setContent("esta es la posición: " + e.latlng.toString())
           .openOn(this.mymap); */
    })
  }

  agregarMarcador(lat:number, lng:number){

    this.marker = L.marker([lat, lng])
                   .addTo(this.mymap);

    this.marker.bindPopup('<b>Hola este es un mensaje</b><br><button>Editar</button> <button>Eliminar</button>').openPopup();

    this.snackBar.open('Marcador Agregado', 'Undo');
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify( this.marcadores ));
  }

  onMapClick(){
  
  }

}
