import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const HotDeal = () => {
  const [deals, setDeals] = useState([
    {
      id: 1,
      title: "Hot Deal for You",
      desc: "Recharge #500 and get 2GB data + 200 minutes call",
    },
    {
      id: 2,
      title: "Limited Offer",
      desc: "Get 10% cashback when you pay electricity bills today",
    },
    {
      id: 3,
      title: "Special Bonus",
      desc: "Deposit #1000 and enjoy free #200 airtime instantly",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle swipe left/right
  const handleSwipe = (direction: number) => {
    setCurrentIndex((prev) => {
      let newIndex = prev + direction;
      if (newIndex < 0) newIndex = deals.length - 1;
      if (newIndex >= deals.length) newIndex = 0;
      return newIndex;
    });
  };

  // Handle delete
  const handleDelete = (id: number) => {
    setDeals((prev) => prev.filter((deal) => deal.id !== id));
    setCurrentIndex(0);
  };

  return (
    <div className="mt-6 relative">
      <AnimatePresence mode="wait">
        {deals.length > 0 && (
          <motion.div
            key={deals[currentIndex].id}
            className="bg-gradient-to-r from-emerald-700 to-emerald-500 rounded-2xl p-4 flex items-center space-x-3 shadow-md"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x > 100) handleSwipe(-1); // swipe right
              if (info.offset.x < -100) handleSwipe(1); // swipe left
            }}
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🔥</span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="text-white font-medium">
                {deals[currentIndex].title}
              </div>
              <div className="text-emerald-100 text-sm">
                {deals[currentIndex].desc}
              </div>
            </div>

            {/* Delete button */}
            <button
              onClick={() => handleDelete(deals[currentIndex].id)}
              className="text-white/80 hover:text-white transition"
            >
              <IoClose className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HotDeal;
