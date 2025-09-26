import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-black/40 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow-lg">
           PRABHA Stores
        </h1>
        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link to="/shop" className="hover:text-cyan-400 transition">Shop</Link>
          <Link to="/about" className="hover:text-cyan-400 transition">About</Link>
          <Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="p-10">
        <Outlet />
      </main>
    </div>
  );
}
