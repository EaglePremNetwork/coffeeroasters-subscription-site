import granEsspressoImage from "./assets/home/desktop/image-gran-espresso.png";
import planaltoImage from "./assets/home/desktop/image-planalto.png";
import piccolloImage from "./assets/home/desktop/image-piccollo.png";
import dancheImage from "./assets/home/desktop/image-danche.png";

type Product = {
  id: number;
  image: string;
  name: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    image: granEsspressoImage,
    name: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    id: 2,
    image: planaltoImage,
    name: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    id: 3,
    image: piccolloImage,
    name: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
  },
  {
    id: 4,
    image: dancheImage,
    name: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];
