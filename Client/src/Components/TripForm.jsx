import { useState, useEffect } from "react";

function TripForm({ onAdd, initialData }) {
  const [form, setForm] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.destination || !form.startDate)
      return alert("Destination & Start Date are required");

    onAdd({ ...form, id: initialData?.id || Date.now() });
    setForm({ destination: "", startDate: "", endDate: "", notes: "" });
  };

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 shadow-md rounded-xl max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-white">
        {initialData ? "Edit Trip" : "Add New Trip"}
      </h2>

      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="destination"
        placeholder="Destination"
        value={form.destination}
        onChange={handleChange}
      />

      <input
        className="w-full p-2 border mb-3"
        type="date"
        name="startDate"
        value={form.startDate}
        onChange={handleChange}
      />

      <input
        className="w-full p-2 border mb-3"
        type="date"
        name="endDate"
        value={form.endDate}
        onChange={handleChange}
      />

      <textarea
        className="w-full p-2 border mb-3"
        name="notes"
        placeholder="Additional Notes"
        value={form.notes}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        {initialData ? "Update Trip" : "Add Trip"}
      </button>
    </form>
  );
}

export default TripForm;
