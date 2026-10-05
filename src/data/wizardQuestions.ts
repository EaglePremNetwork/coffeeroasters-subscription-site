import { shipmentPrices } from "./shipmentPrices";

export type WizardOption = {
  id: string;
  title: string;
  description: string;
};

export type WizardQuestion = {
  id: number;
  question: string;
  options: WizardOption[];
};

export const wizardQuestions: WizardQuestion[] = [
  {
    id: 1,
    question: "How do you drink your coffee?",
    options: [
      {
        id: "capsule",
        title: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        id: "filter",
        title: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        id: "espresso",
        title: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    id: 2,
    question: "What type of coffee?",
    options: [
      {
        id: "single-origin",
        title: "Single origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        id: "decaf",
        title: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        id: "blended",
        title: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: 3,
    question: "How much would you like?",
    options: [
      {
        id: "250g",
        title: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        id: "500g",
        title: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        id: "1000g",
        title: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    id: 4,
    question: "Want us to grind them?",
    options: [
      {
        id: "wholebean",
        title: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        id: "filter",
        title: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        id: "cafetiere",
        title: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    id: 5,
    question: "How often should we deliver?",
    options: [
      {
        id: "weekly",
        title: "Every week",
        description: `$${shipmentPrices["250g"]["Every week"].toFixed(2)} per shipment. Includes free first-class shipping.`,
      },
      {
        id: "biweekly",
        title: "Every 2 weeks",
        description: `$${shipmentPrices["250g"]["Every 2 weeks"].toFixed(2)} per shipment. Includes free priority shipping.`,
      },
      {
        id: "monthly",
        title: "Every month",
        description: `$${shipmentPrices["250g"]["Every month"].toFixed(2)} per shipment. Includes free priority shipping.`,
      },
    ],
  },
];
