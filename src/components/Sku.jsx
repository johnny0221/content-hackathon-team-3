const renderHeartSVG = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3"
  >
    <path
      d="M7.48742 4.04747L8.00004 4.52745L8.51266 4.04747C9.82598 2.81775 11.9727 2.81826 13.2854 4.0489C13.9056 4.63037 14.2498 5.54072 14.2505 6.502C14.2512 7.45763 13.9122 8.36277 13.2996 8.94465L8.00021 13.5099L2.70238 8.94298C2.08953 8.3609 1.75023 7.45594 1.7505 6.50081C1.75077 5.54011 2.09456 4.63031 2.71472 4.0489C4.02737 2.81826 6.1741 2.81775 7.48742 4.04747Z"
      stroke="#414856"
      strokeWidth="1.5"
    />
  </svg>
);

export default function Sku({
  image,
  skuName,
  skuPrice,
  skuCashback,
  skuMerchant,
  index,
}) {
  const getBorder = () => {
    if (index % 2 === 0) {
      return "border-gray-50 border-r-2 border-b-2";
    } else {
      return "border-gray-50 border-b-2";
    }
  };

  return (
    <div className={`flex flex-col p-3 h-full ${getBorder()}`}>
      <div className="flex justify-end items-center">
        <div className="flex justify-center items-center px-3 w-6 h-6 rounded-full border border-black-50 z-10 shadow-lg">
          <div>{renderHeartSVG()}</div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <img className="w-4/5 h-4/5 rounded-md" src={image} alt="SKUImage" />
      </div>
      <div className="mt-2">
        <div className="text-gray-400 font-semibold text-xs text-start">
          {skuName}
        </div>
      </div>
      <div className="mt-1">
        <div className="text-gray-400 font-extrabold text-xs text-start">
          {skuPrice}
        </div>
      </div>
      <div className="mt-1">
        <div className="text-xs font-bold text-start">
          Up to ${skuCashback} Cashback
        </div>
      </div>
      <div className="mt-1">
        <div className="text-gray-400 font-semibold text-xs text-start">
          {skuMerchant}
        </div>
      </div>
    </div>
  );
}
