export default function Contact() {
  const phoneNumber = "919444741433"; 
  const gpayNumber = "9444741433"; 

  return (
    <div className="max-w-lg mx-auto bg-black/40 p-8 rounded-2xl shadow-lg text-center space-y-6">
      <h2 className="text-3xl font-bold text-cyan-400">Contact Us</h2>

      <p className="text-lg text-gray-300">
        📞 <span className="font-semibold">Contact Number:</span> +91 9444741433
      </p>

      <p className="text-lg text-gray-300">
        💰 <span className="font-semibold">GPay Number:</span> {gpayNumber}
      </p>

      <p className="text-lg text-gray-300">
        ⏰ <span className="font-semibold">Timing:</span> 4:00 AM – 10:00 PM
      </p>

      <a
        href={`https://wa.me/${phoneNumber}?text=Hello%20Prabha%20Stores%2C%20I%20would%20like%20to%20order...`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-400 transition"
      >
        💬 Order on WhatsApp
      </a>
    </div>
  );
}
