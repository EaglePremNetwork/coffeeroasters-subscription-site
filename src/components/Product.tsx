import type { Product as ProductType } from "../data/products";

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  return (
    <li
      key={product.id}
      className="flex flex-col items-center justify-center gap-6"
    >
      <img className="h-48.25 w-auto" src={product.image} alt="" />
      <div className="flex flex-col gap-4 text-center">
        <h3 className="font-display font-black text-2xl text-neutral-900 leading-normal tracking-normal">
          {product.name}
        </h3>
        <p className="leading-[1.6] tracking-normal text-neutral-900">
          {product.description}
        </p>
      </div>
    </li>
  );
}
