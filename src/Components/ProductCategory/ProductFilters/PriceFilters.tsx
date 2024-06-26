import React, { useState } from "react";

const PriceFiltersMinMax = ({
  setPriceRange,
  priceRange
}: {
  setPriceRange: (range: { min: number; max: number }) => void;
  priceRange: { min: number; max: number };
}) => {

  return (
    <div className="price-filters flex flex-row items-center">
      <PriceFilter
        label="Price:"
        min={1}
        max={priceRange.max - 1}
        value={priceRange.min}
        onChange={(e) =>
          setPriceRange({ ...priceRange, min: Number(e.target.value) })
        }
      />
      <PriceFilter
        label=" -"
        min={priceRange.min + 1}
        max={Infinity}
        value={priceRange.max}
        onChange={(e) =>
          setPriceRange({ ...priceRange, max: Number(e.target.value) })
        }
      />

      {/* <button onClick={handlePriceChange} className="btn">
        Apply
      </button> */}
    </div>
  );
};

export default PriceFiltersMinMax;

const PriceFilter = ({
  label,
  min,
  max,
  value,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex items-center text-lg ">
    <p className="font-bold ">{label}</p>
    <div className="relative ">
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 font-bold">
        $
      </span>
      <input
        className="input input-bordered text-end w-20"
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);
