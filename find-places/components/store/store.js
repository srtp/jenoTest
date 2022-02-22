import axios from "axios";
import { makeAutoObservable } from "mobx";

const url = `http://localhost:3001/restaurants`;
const urlPhoto = `http://localhost:3001/photo`;

// const urlPhoto = `maps.googleapis.com/maps/api/place/photo?maxwidth=400
// &photo_reference=${url}&key=${apiKey}`;
class Store {
  places = [];

  constructor() {
    makeAutoObservable(this);
  }

  getAllPlaces() {
    axios.get(`${url}`).then((res) => {
      this.places = res.data;
    });
  }
}

export const store = new Store();
