import React  from 'react';
import CarouselPage from './CarouselPage';
import FeaturedToday from './FeaturedToday';
import BrowsePage from './BrowsePage';

const Home = () => {
  return (
    <div className="mt-1">
      <CarouselPage />
      <FeaturedToday />
      <BrowsePage />
    </div>
  );
}

export default Home;
