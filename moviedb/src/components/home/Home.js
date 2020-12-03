import React  from 'react';
import CarouselPage from './CarouselPage';
import FeaturedToday from './FeaturedToday';

const Home = () => {
  return (
    <div className="mt-1">
      <CarouselPage />
      <FeaturedToday />
    </div>
  );
}

export default Home;
