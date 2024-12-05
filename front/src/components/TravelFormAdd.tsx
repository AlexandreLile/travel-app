import { useState } from "react";
import { TravelType } from ".../travel.type";
import Button from "./ui/Button";
import Input from "./ui/Input";

type TravelFormAddProps = {
  travelList: TravelType[];
  setTravelList: (travelList: TravelType[]) => void;
};

const TravelFormAdd = ({ travelList, setTravelList }) => {
  const [travelAddData, setTravelAddData] = useState<TravelType[]>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const newTravel = {
      ...travelAddData,
      [name]: value,
    };

    setTravelAddData(newTravel);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    travelAddData.id = travelList.length + 1;
    setTravelList([...travelList, travelAddData]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 shadow-md p-10 mb-10 rounded-md"
    >
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <Input
        type="text"
        placeholder="city"
        name="city"
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="image"
        name="image"
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="description"
        name="description"
        onChange={handleChange}
      />
      <Button type="submit" text="Add travel"></Button>
    </form>
  );
};

export default TravelFormAdd;
