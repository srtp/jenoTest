import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { store } from "../store/store";
import Styles from "../../styles/index.module.css";

const elementsPlaces = observer((props) => {
  const { places } = store;
  const { searchText } = props;
  const filterPlaces = places.filter((place) => {
    return place.name.includes(searchText);
  });
  useEffect(() => {
    store.getAllPlaces();
  }, []);
  return (
    <div>
      {filterPlaces.map((place) => {
        return (
          <center>
            <div key={places.place_id} className={Styles.card}>
              <div className="card card-side  bg-base-100 shadow-xl">
                {place.photos &&
                  place.photos.map((element) => {
                    return (
                      <figure>
                        <img
                          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=250
            &photo_reference=${element.photo_reference}&key=${process.env.NEXT_PUBLIC_API_KEY}`}
                          alt="food"
                          className="w-32 md:w-32 lg:w-full"
                        />{" "}
                      </figure>
                    );
                  })}
                <div className="card-body">
                  <h2 className="text-center font-semibold text-lg">
                    Restaurant : {place.name}
                  </h2>
                  <p>Address : {place.formatted_address}</p>
                  <div className="justify-end card-actions">
                    <button className="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>
            </div>
          </center>
        );
      })}
    </div>
  );
});

export default elementsPlaces;
