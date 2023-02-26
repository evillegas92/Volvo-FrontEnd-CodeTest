import { GetStaticProps } from "next";
import { Car } from "../../src/shared/car";
import { getCars } from "../../lib/carUtils";
import Carousel from "src/components/carousel";
import { CarCard } from "src/components/car-card";

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
  return (
    <Carousel>
      {cars.map((car) => (
        <CarCard car={car} key={car.id}/>
      ))}
    </Carousel>
  );
}
