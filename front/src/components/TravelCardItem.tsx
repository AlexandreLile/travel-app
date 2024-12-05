import { TravelType } from "../types/travel.type";
import Button from "./ui/Button";
import { Link } from "react-router-dom";
import DeleteConfirmationDialog from "./ConfirmModal";
import { useState } from "react";

const TravelCardItem = ({
  travel,
  travelList,
  setTravelList,
}: travelCardItemProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    const index = travelList.indexOf(travel);
    travelList.splice(index, 1);
    setTravelList([...travelList]);
    setShowModal(false);
  };

  return (
    <div className="shadow-md rounded-xl p-4">
      <img className="w-full" src={travel.image} alt="" />
      <h3 className="text-xl">{travel.name}</h3>
      <p>{travel.description.substring(10)}</p>
      <Link to={`/travel/${travel.id}`}>
        <Button text="Show more" />
      </Link>
      <Button
        variant="danger"
        text="Delete"
        onClick={() => setShowModal(true)}
      />

      <DeleteConfirmationDialog
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default TravelCardItem;
