import { useParams } from "react-router-dom";
import image from "../assets/1bag.png";

const products = [
  { id: 1, name: "Fresh Bag", price: 21, desc: "High quality fresh bag." },
  { id: 2, name: "Organic Rice", price: 15, desc: "Premium organic rice." },
  { id: 3, name: "Fresh Fruits", price: 18, desc: "Healthy fresh fruits." },
  { id: 4, name: "Vegetable Pack", price: 12, desc: "Farm fresh vegetables." },
  { id: 5, name: "Dairy Milk", price: 10, desc: "Pure dairy product." },
  { id: 6, name: "Healthy Snacks", price: 9, desc: "Tasty healthy snacks." },
];

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 className="text-center mt-20 text-2xl">Product Not Found</h2>;
  }

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full grid md:grid-cols-2 gap-8 p-8">

        <img
          src={image}
          alt={product.name}
          className="w-full h-80 object-contain"
        />

        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            {product.name}
          </h2>

          <p className="text-amber-600 text-2xl font-semibold mt-4">
            ${product.price}
          </p>

          <p className="text-gray-600 mt-4">
            {product.desc}
          </p>

          <button className="mt-6 w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition duration-300">
            Buy Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductDetails;
