import { GetStaticProps } from "next";
import { Car } from "../../src/shared/car";
import { getCars } from "../../lib/carUtils";
import Carousel from "src/components/carousel";
import { CarCard } from "src/components/car-card";
import { Filter } from "src/components/filter";
import { FilterOption } from "src/shared/filter-option";
import { useState } from "react";

export const getStaticProps: GetStaticProps = () => {
  const cars: Car[] = getCars();
  return {
    props: {
      cars,
    },
    revalidate: 1,
  };
};

export default function Products({ cars }: { cars: Car[] }) {
  const [filteredCars, setFilteredCars] = useState(cars);
  const handleFilterSelection = (bodyTypeSelected: string): void => {
    if (!bodyTypeSelected || !bodyTypeSelected.trim()) {
        // reset the filter
        setFilteredCars(cars);
        return;
    }
    console.log(`selected value: ${bodyTypeSelected}`);
    const filteredResult: Car[] = cars.filter(car => car.bodyType === bodyTypeSelected);
    setFilteredCars(filteredResult);
  };
  const options: FilterOption[] = cars.map(
    (car) => ({ id: car.bodyType, value: car.bodyType } as FilterOption)
  );
  return (
    <>
      <Filter options={options} clickCallback={handleFilterSelection}></Filter>
      <Carousel>
        {filteredCars.map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </Carousel>
    </>
  );
}
