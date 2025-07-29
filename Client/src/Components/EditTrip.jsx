import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import TripForm from "../components/TripForm";

function EditTrip() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("trips")) || [];
    const found = stored.find((t) => t.id === parseInt(id));
    if (!found) return navigate("/");
    setTrip(found);
  }, [id, navigate]);

  const handleUpdate = (updatedTrip) => {
    const stored = JSON.parse(localStorage.getItem("trips")) || [];
    const updatedList = stored.map((t) =>
      t.id === parseInt(id) ? updatedTrip : t
    );
    localStorage.setItem("trips", JSON.stringify(updatedList));
    navigate("/");
  };

  return (
    <div>
      {trip && <TripForm onAdd={handleUpdate} initialData={trip} />}
    </div>
  );
}

export default EditTrip;
