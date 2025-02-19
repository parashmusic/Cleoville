import cat_1 from '../assets/silk.jpg';
import cat_2 from '../assets/rayon.jpg';
import cat_3 from '../assets/printed.jpg';
import cat_4 from '../assets/cot.jpg';
import cat_5 from '../assets/linen.jpg';
const categories = [
  {
    name: "Silk",
    image: cat_1,
  },
  {
    name: "Rayon",
    image: cat_2,
  },
  {
    name: "Printed",
    image: cat_3,
  },
  {
    name: "Cotton",
    image: cat_4,
  },
  {
    name: "Linen",
    image: cat_5,
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-12">
    <div className="container mx-auto">
      <h2 className="mb-8 text-2xl font-bold">Shop by Category</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {categories.map((category) => (
          <a key={category.name} href="/" className="group flex flex-col items-center">
            <div className="relative aspect-square w-full overflow-hidden rounded-full">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="mt-2 text-lg text-gray-500 font-medium text-center">{category.name}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
  
  )
}

