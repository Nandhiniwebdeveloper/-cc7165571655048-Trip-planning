import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddTrip from './pages/AddTrip';
import EditTrip from './components/EditTrip';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <nav className="w-full bg-white shadow mb-8">
          <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Trip Planner
            </h1>
            <div className="space-x-6">
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/add-trip"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Add Trip
              </Link>
            </div>
          </div>
        </nav>
        <main className="flex-1 flex justify-center items-start">
          <div className="w-full max-w-5xl bg-white rounded-lg shadow p-8 mt-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-trip" element={<AddTrip />} />
              <Route path="/edit-trip/:id" element={<EditTrip />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
