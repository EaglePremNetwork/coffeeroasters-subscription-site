import ukIcon from "../assets/about/desktop/illustration-uk.svg";
import canadaIcon from "../assets/about/desktop/illustration-canada.svg";
import australiaIcon from "../assets/about/desktop/illustration-australia.svg";

type HeadQuarter = {
  image: string;
  id: number;
  country: string;
  address: string[];
  phone: string;
};

export const headquarters: HeadQuarter[] = [
  {
    id: 1,
    image: ukIcon,
    country: "United Kingdom",
    address: ["68 Asfordby Rd", "Alcaston", "SY6 1YA"],
    phone: "+44 1241 918425",
  },
  {
    id: 2,
    image: canadaIcon,
    country: "Canada",
    address: ["1528 Eglinton Avenue", "Toronto", "Ontario M4P 1A6"],
    phone: "+1 416 485 2997",
  },
  {
    id: 3,
    image: australiaIcon,
    country: "Australia",
    address: ["36 Swanston Street", "Kewell", "Victoria"],
    phone: "+61 4 9928 3629",
  },
];
