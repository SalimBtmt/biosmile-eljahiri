const reviews = [
  {
    author_name: "Amina L.",
    rating: 5,
    text: "Excellent cabinet dentaire à Marrakech ! Équipe très professionnelle et à l’écoute. Je recommande vivement !",
    profile_photo_url: "/amina.jpg",
  },
  {
    author_name: "Youssef K.",
    rating: 4.7,
    text: "Super accueil, matériel moderne et service irréprochable. Merci au docteur !",
    profile_photo_url: "/youssef.jpg",
  },
  {
    author_name: "Youssef K.",
    rating: 4.7,
    text: "Super accueil, matériel moderne et service irréprochable. Merci au docteur !",
    profile_photo_url: "/youssef.jpg",
  },
];

export default function ReviewsSection() {
  const bestReview = reviews[0]; // meilleur avis affiché en grand

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Ce que disent nos patients
        </h2>

        {/* Best review - highlighted */}
        <div className="bg-white shadow-xl rounded-lg p-6 max-w-xl mx-auto mb-8 transform transition duration-500 hover:scale-105">
          <img
            src={bestReview.profile_photo_url}
            alt={bestReview.author_name}
            className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-lg font-semibold">{bestReview.author_name}</h3>
          <p className="text-yellow-400 text-xl mb-2">★★★★★</p>
          <p className="text-gray-600 italic">"{bestReview.text}"</p>
        </div>

        {/* Other good reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.slice(1).map((review, index) => (
            <div
              key={index}
              className="bg-white shadow rounded p-4 flex flex-col items-center"
            >
              <img
                src={review.profile_photo_url}
                alt={review.author_name}
                className="w-12 h-12 rounded-full mb-2 object-cover"
              />
              <h4 className="font-medium">{review.author_name}</h4>
              <p className="text-yellow-400">★★★★☆</p>
              <p className="text-sm text-gray-600 mt-2 text-center">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
