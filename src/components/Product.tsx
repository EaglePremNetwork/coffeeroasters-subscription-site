import type { Product as ProductType } from "../data/products";

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  return (
    <li className="flex flex-col items-center justify-center gap-6 md:w-5/6 md:flex-row md:gap-8 lg:flex-col">
      <img className="h-48.25 w-auto" src={product.image} alt="" />
      <div className="flex flex-col gap-4 text-center md:gap-6 md:text-left lg:text-center">
        <h3 className="font-display text-2xl leading-normal font-black tracking-normal text-neutral-900">
          {product.name}
        </h3>
        <p className="leading-[1.6] tracking-normal text-neutral-900">
          {product.description}
        </p>
      </div>
    </li>
  );
}
