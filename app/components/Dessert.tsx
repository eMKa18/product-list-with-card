import Image from "next/image";

export interface DessertData {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

interface DessertProps {
  dessert: DessertData;
}

export function Dessert({ dessert }: DessertProps) {
  const Images = () => {
    return (
      <>
        <Image
          src={dessert.image.desktop}
          alt="desert image"
          width={400}
          height={400}
          className="rounded-lg hidden xl:block"
        ></Image>
        <Image
          src={dessert.image.tablet}
          alt="desert image"
          width={300}
          height={300}
          className="rounded-lg xl:hidden md:block hidden"
        ></Image>
        <Image
          src={dessert.image.mobile}
          alt="desert image"
          width={250}
          height={300}
          className="rounded-lg md:hidden"
        ></Image>
      </>
    );
  };

  return (
    <div>
      <div className="flex flex-col">
        <Images />
        <button
          type="button"
          className="border border-[color:hsl(12,20%,44%)] bg-white rounded-full flex gap-2 justify-center items-center py-2 px-4 w-[75%] self-center relative -top-5 md:-top-6 z-10 font-medium md:text-lg hover:text-red-500 text-[10px]"
        >
          <Image
            src={"/images/icon-add-to-cart.svg"}
            width={18}
            height={18}
            alt="cart icon"
          ></Image>
          Add to Cart
        </button>
        <div>
          <div className="text-[color:hsl(7,20%,60%)]">{dessert.category}</div>
          <div className="text-[color:hsl(14,65%,9%)] font-bold">
            {dessert.name}
          </div>
          <div className="text-[color:hsl(14,86%,42%)] font-bold">
            {"$" + dessert.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
