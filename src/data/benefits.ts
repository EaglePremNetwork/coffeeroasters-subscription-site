import coffeeBeanIcon from "../assets/home/desktop/icon-coffee-bean.svg";
import giftIcon from "../assets/home/desktop/icon-gift.svg";
import truckIcon from "../assets/home/desktop/icon-truck.svg";

export type Benefit = {
  id: number;
  icon: string;
  name: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    id: 1,
    icon: coffeeBeanIcon,
    name: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    id: 2,
    icon: giftIcon,
    name: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    id: 3,
    icon: truckIcon,
    name: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];
