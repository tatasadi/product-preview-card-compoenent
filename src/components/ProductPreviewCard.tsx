import { Fraunces } from "next/font/google"
import Image from "next/image"
import iconCart from "../../public/images/icon-cart.svg"

const fraunces = Fraunces({ subsets: ["latin"], weight: ["700"] })

export default function ProductPreviewCard() {
  return (
    <div className="w-80 bg-white rounded-[0.625rem] grid grid-cols-1 lg:grid-cols-2 lg:w-[37.5rem]">
      <div className="bg-[url('/images/image-product-mobile.jpg')] h-56 bg-center bg-contain bg-no-repeat rounded-t-[0.625rem] lg:bg-[url('/images/image-product-desktop.jpg')] lg:h-[28.125rem] lg:rounded-t-none lg:!rounded-l-[0.625rem]"></div>
      <div className="p-6 lg:p-8 flex flex-col justify-between">
        <h1 className="text-xs font-medium tracking-[0.3125rem] text-dark-grayish-blue mb-3">
          PERFUME
        </h1>
        <h2
          className={`${fraunces.className} font-bold text-[2rem] leading-8 text-very-dark-blue mb-4`}
        >
          Gabrielle Essence Eau De Parfum
        </h2>
        <p className="text-sm font-medium leading-[1.4375rem] text-dark-grayish-blue mb-6">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex gap-4 items-center mb-5">
          <div
            className={`${fraunces.className} text-[2rem] font-bold leading-8 text-dark-cyan`}
          >
            $149.99
          </div>
          <div className="text-[0.8125rem] font-medium leading-[1.4375rem] line-through text-dark-grayish-blue">
            $169.99
          </div>
        </div>
        <button className="bg-dark-cyan text-white rounded-lg p-4 flex items-center justify-center gap-3 text-sm font-bold cursor-pointer hover:bg-very-dark-cyan">
          <Image alt="cart-icon" src={iconCart} />
          Add to Cart
        </button>
      </div>
    </div>
  )
}
