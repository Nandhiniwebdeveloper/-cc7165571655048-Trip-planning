import { useNavigate } from "react-router-dom";

function TripCard({ trip, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-gray-800">
      <h2 className="text-xl font-semibold">{trip.destination}</h2>
      <p>
        <strong>Start Date:</strong> {trip.startDate}
      </p>
      <p>
        <strong>End Date:</strong> {trip.endDate}
      </p>
      <p>
        <strong>Notes:</strong> {trip.notes}
      </p>
      <div className="mt-4 flex gap-3">
        <button
          onClick={() => navigate(`/edit-trip/${trip.id}`)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(trip.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TripCard;
