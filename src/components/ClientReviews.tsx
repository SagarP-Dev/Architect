// components/ClientReviews.tsx
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: "xyz",
    role: "xyz",
    content: "xyz...!",
    rating: 5
  },
  {
    id: 2,
    name: "xyz",
    role: "xyz",
    content: "xyz...!",
    rating: 5
  },
  {
    id: 3,
    name: "xyz",
    role: "xyz",
    content: "xyz...!",
    rating: 4
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-[#C4A962]' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function ClientReviews() {
  return (
    <section id="reviews" className="py-20 px-6 lg:px-12 bg-gray-900/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#C4A962]">
          Client Testimonials
        </h2>
        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          Hear what our clients say about our work and service
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-white/10 hover:border-[#C4A962]/50 transition-all duration-300"
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 text-white/90 italic">"{review.content}"</p>
              <div className="mt-6">
                <h4 className="text-white font-medium">{review.name}</h4>
                <p className="text-[#C4A962] text-sm">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}