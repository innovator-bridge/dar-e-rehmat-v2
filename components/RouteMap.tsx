'use client';
import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { useLang } from './Lang';
import { places, mapUi, MAPS_URL, ui } from '@/data/site';
import { routeLatLng } from '@/data/route';

// Real map tiles (OpenStreetMap and Esri imagery) drawn with Leaflet. The route line is static data.
export default function RouteMap({ variant }: { variant: 'route' | 'area' }) {
  const { lang, t } = useLang();
  const box = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const layers = useRef<{ streets?: any; sat?: any }>({});
  const [mode, setMode] = useState<'streets' | 'sat'>(variant === 'area' ? 'sat' : 'streets');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = (await import('leaflet')).default;
      if (cancelled || !box.current) return;
      const map = L.map(box.current, { scrollWheelZoom: false, zoomControl: true, attributionControl: true });
      mapRef.current = map;
      layers.current.streets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap contributors' });
      layers.current.sat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 18, attribution: 'Imagery © Esri' });
      (variant === 'area' ? layers.current.sat : layers.current.streets).addTo(map);

      const pin = (cls: string, label: string) =>
        L.divIcon({ className: 'mk-wrap', html: `<span class="mk ${cls}"><i></i></span><span class="mk-label">${label}</span>`, iconSize: [0, 0] });
      L.polyline(routeLatLng as any, { color: '#E3A72F', weight: 5, opacity: 0.95, dashArray: variant === 'area' ? '2 10' : undefined, lineCap: 'round' }).addTo(map);
      L.marker([places.home.lat, places.home.lng], { icon: pin('home', t(places.home.label)) }).addTo(map);
      L.marker([places.hospital.lat, places.hospital.lng], { icon: pin('hosp', t(places.hospital.label)) }).addTo(map);
      if (variant === 'area') {
        L.marker([places.lahore.lat, places.lahore.lng], { icon: pin('city', t(places.lahore.label)) }).addTo(map);
        map.fitBounds([[31.12, 74.08], [31.62, 74.52]], { padding: [10, 10] });
      } else {
        map.fitBounds(routeLatLng as any, { padding: [50, 50] });
      }
    })();
    return () => { cancelled = true; mapRef.current?.remove(); mapRef.current = null; };
  }, [variant, lang]);

  useEffect(() => {
    const map = mapRef.current, l = layers.current;
    if (!map || !l.streets || !l.sat) return;
    if (mode === 'sat') { map.removeLayer(l.streets); l.sat.addTo(map); } else { map.removeLayer(l.sat); l.streets.addTo(map); }
  }, [mode]);

  return (
    <div className={'rmap ' + variant}>
      <div ref={box} className="rmap-box" role="img" aria-label={t(places.home.label) + ' / ' + t(places.hospital.label)} />
      <div className="rmap-bar">
        <button className="chip" aria-pressed={mode === 'streets'} onClick={() => setMode('streets')}>{t(mapUi.streets)}</button>
        <button className="chip" aria-pressed={mode === 'sat'} onClick={() => setMode('sat')}>{t(mapUi.satellite)}</button>
        <a className="chip" href={MAPS_URL} target="_blank" rel="noopener noreferrer">{t(ui.openMap)}</a>
      </div>
    </div>
  );
}
