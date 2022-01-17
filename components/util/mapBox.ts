import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const mapBox = () => {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2FiYW1hbWE5OCIsImEiOiJja3lleXJ6dXgwN3B2MnBsZ25pcjc3ZzR5In0.ZnWIm-5kyHALUn-09VkB6Q";

  const setupMap = (center) => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/sabamama98/ckyez0yqw86tr14s0te6pvxy5",
      center: [44.78333,41.71667], // თბილისის კორტინატები,ზუსტად რომ დაჯდეს
      zoom: 14,
    });

    map.on('click', (event) => {
      // If the user clicked on one of your markers, get its information.
      const features = map.queryRenderedFeatures(event.point, {
        layers: ['fsg'] // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];
      const popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.type === 'Point' && [feature.geometry.coordinates[0],feature.geometry.coordinates[1]])
      .setHTML(
        `<p>${feature.properties.description ? feature.properties.description : ''}</p> <br/> <p>${feature.properties.num ? feature.properties?.num : ''}</p>`
      )
      .addTo(map);
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
    map.on('load', function () {
      map.resize();
  });
  };

  const successLocation = (position) => {
    var crd = position.coords;
    setupMap([position.coords.longitude, position.coords.latitude]);
  };



  const errorLocation = () => {
    setupMap([-2.24, 53.48]);
  };

  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
  });
};
