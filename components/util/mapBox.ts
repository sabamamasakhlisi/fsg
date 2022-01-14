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

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
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
