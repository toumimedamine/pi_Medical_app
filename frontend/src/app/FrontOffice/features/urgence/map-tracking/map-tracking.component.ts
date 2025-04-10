import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-map-tracking',
  templateUrl: './map-tracking.component.html',
  styleUrls: ['./map-tracking.component.css']
})
export class MapTrackingComponent implements AfterViewInit {
  private map!: L.Map;
  private marker!: L.Marker;
  private ws!: WebSocketSubject<any>;
  private path: L.LatLngExpression[] = [];

  // 📍 Icône personnalisée avec emoji
  private doctorIcon = L.divIcon({
    html: '📍',
    className: 'custom-doctor-icon',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  ngAfterViewInit(): void {
    this.initMap();
    this.initWebSocket();
  }

  private initMap(): void {
    const initialPosition: L.LatLngExpression = [36.8065, 10.1815];

    this.map = L.map('map').setView(initialPosition, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    this.marker = L.marker(initialPosition, { icon: this.doctorIcon }).addTo(this.map)
      .bindPopup('🚑 Médecin en route')
      .openPopup();

    this.path.push(initialPosition);
  }

  private initWebSocket(): void {
    this.ws = new WebSocketSubject('ws://localhost:8089/Back/ws/location');

    this.ws.subscribe({
      next: (message: any) => {
        console.log('Position reçue :', message);
        this.updateMarker(message.lat, message.lng);
      },
      error: (err) => console.error('Erreur WebSocket', err),
      complete: () => console.warn('Connexion WebSocket fermée')
    });
  }

  private updateMarker(lat: number, lng: number): void {
    const newLatLng: L.LatLngExpression = [lat, lng];

    this.marker.setLatLng(newLatLng);
    this.map.flyTo(newLatLng, this.map.getZoom(), {
      animate: true,
      duration: 1.2
    });

    this.path.push(newLatLng);
    L.polyline(this.path, { color: 'blue' }).addTo(this.map);
  }
}
