import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TravelType } from "../types/travel.type";
import TravelList from "./TravelList";

const SingleTravelPage = () => {
  const { id } = useParams();
  const [travel, setTravel] = useState<TravelType | null>(null);

  useEffect(() => {
    const fetchTravel = async () => {
      const response = await fetch("/travels.json");
      const travelList = await response.json();
      const findTravel = travelList.find(
        (travel: TravelType) => travel.id === Number(id)
      );
      setTravel(findTravel);
    };

    fetchTravel();
  }, [id]);

  return (
    <>
      <h1>{travel?.name}</h1>
      <img src={travel?.image} alt="" />
      <TravelList></TravelList>
    </>
  );
};

export default SingleTravelPage;
