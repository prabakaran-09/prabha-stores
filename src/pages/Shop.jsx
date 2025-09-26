import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Shop() {
  const products = [
    { id: 1, name: "Groceries", img: "/images/groceries.jpg", link: "/groceries" },
    { id: 2, name: "Milk Packet", img: "/images/milk copy.jpg", link: "/dairy" },
    { id: 3, name: "Watercan", img: "/images/watercan copy.jpg", link: "/contact" }, // goes to WhatsApp/contact
  ];

  return (
    <div className="p-10 text-center">
      <h2 className="text-4xl font-bold mb-8 text-cyan-400">Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <motion.div
            key={item.id}
            className="bg-gray-900 p-6 rounded-xl shadow-xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-40 mx-auto mb-4 rounded-lg shadow-lg"
            />
            <h3 className="text-2xl font-bold mb-4">{item.name}</h3>
            <Link
              to={item.link}
              className="bg-cyan-500 px-5 py-2 rounded-lg font-bold hover:bg-cyan-400 inline-block"
            >
              Explore
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
