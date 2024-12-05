import TravelCardItem from "./components/TravelCardItem";
import TravelFormAdd from "./components/TravelFormAdd";
import { useEffect } from "react";
import { useState } from "react";
import { TravelType } from "./types/travel.type";

function App() {
  const [counter, setCounter] = useState(0);

  const [travelList, setTravelList] = useState<TravelType[]>([]);

  useEffect(() => {
    fetchTravelList();
  }, []);

  const fetchTravelList = async () => {
    const response = await fetch("http://localhost:8000/travels");
    const data = await response.json();
    setTravelList(data);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-red-800 text-4xl my-10">Travel list</h1>
      <TravelFormAdd travelList={travelList} setTravelList={setTravelList} />

      <button onClick={() => setCounter(counter + 1)}>
        Number counter : {counter}
      </button>
      <div className="list gap-4 grid grid-cols-3 p-4">
        {travelList.map((travel) => (
          <TravelCardItem
            travel={travel}
            key={travel.id}
            travelList={travelList}
            setTravelList={setTravelList}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
