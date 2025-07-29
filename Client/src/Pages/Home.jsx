import { useEffect, useState } from "react";
import TripCard from "../components/TripCard";

function Home() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("trips")) || [];
    setTrips(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = trips.filter((t) => t.id !== id);
    localStorage.setItem("trips", JSON.stringify(updated));
    setTrips(updated);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {trips.length === 0 ? (
        <p>No trips planned yet.</p>
      ) : (
        trips.map((t) => (
          <TripCard key={t.id} trip={t} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
}

export default Home;
