import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TravelType } from "../types/travel.type";
import TravelCardItem from "./TravelCardItem";
import Button from "./ui/Button";

const TravelList = () => {
  const { id } = useParams();
  const [travelList, setTravelList] = useState<TravelType[]>([]);
  const [limite, setLimit] = useState<number>(3);

  useEffect(() => {
    fetchTravelList();
  }, [id, limite]);

  const fetchTravelList = async () => {
    const response = await fetch("/travels.json");
    const data = await response.json();

    const filteredData = data
      .filter((travel: TravelType) => travel.id !== Number(id))
      .slice(0, limite);

    setTravelList(filteredData);
  };

  return (
    <section className="flex justify-center items-center flex-col">
      <div className="list flex p-4">
        {travelList.map((travel) => (
          <TravelCardItem
            travel={travel}
            key={travel.id}
            travelList={travelList}
            setTravelList={setTravelList}
          />
        ))}
      </div>
      <Button text="load more" onClick={() => setLimit(limite + 3)}></Button>
    </section>
  );
};

export default TravelList;
