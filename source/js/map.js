{
  const main = () => {
    const mapContainer = document.querySelector('.map__container');
    const preImage = mapContainer.querySelector('picture');
    const coordinate = [59.968152, 30.316672];
    const zoom = 18;
    const url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    const markerText = `
      Санкт-Петербург, набережная реки Карповки, дом 5<br>
      Номер телефона: +7 (999) 999-99-99
    `;

    preImage.remove();

    const icon = L.icon({
      iconUrl: '/img/icons/stack.svg#map-icon',
      iconSize: [38, 50],
      iconAnchor: [0, 40],
      popupAnchor:  [20, -45],
    });

    const map = L
      .map(mapContainer)
      .setView(coordinate, zoom);

    L.tileLayer(url)
      .addTo(map);

    L.marker(coordinate, { icon })
      .addTo(map)
      .bindPopup(markerText);
  };

  const script = document.createElement('script');
  script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
  document.body.appendChild(script);

  script.addEventListener('load', main)
}
