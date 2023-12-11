export default function ProductPreviewCard() {
  return (
    <div className="w-80 bg-white rounded-[0.625rem] grid grid-cols-1 lg:grid-cols-2 lg:w-[37.5rem]">
      <div className="bg-[url('/images/image-product-mobile.jpg')] h-56 bg-center bg-contain bg-no-repeat rounded-t-[0.625rem] lg:bg-[url('/images/image-product-desktop.jpg')] lg:h-[28.125rem] lg:rounded-t-none lg:!rounded-l-[0.625rem]"></div>
      <div className="p-6 lg:p-8 flex flex-col justify-between">
        <h1>PERFUME</h1>
        <h2>Gabrielle Essence Eau De Parfum</h2>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div>
          <div>$149.99</div>
          <div>$169.99</div>
        </div>
        <button>
          <img />
          Add to Cart
        </button>
      </div>
    </div>
  )
}
