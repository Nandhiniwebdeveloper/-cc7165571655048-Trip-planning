import { useNavigate } from "react-router-dom";
import TripForm from "../components/TripForm";

function AddTrip() {
  const navigate = useNavigate();

  const handleAdd = (trip) => {
    const existing = JSON.parse(localStorage.getItem("trips")) || [];
    const updated = [...existing, trip];
    localStorage.setItem("trips", JSON.stringify(updated));
    navigate("/");
  };

  return (
    <div>
      <TripForm onAdd={handleAdd} />
    </div>
  );
}

export default AddTrip;
