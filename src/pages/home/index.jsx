import React from 'react';
import HomeHero from '../../components/home_hero';
import HeroFilter from '../../components/hero_filter';
import BestSelling from '../../components/best_selling';
import NewProducts from '../../components/new_products';
import OurBlogs from '../../components/our_blogs';

const Home = () => {
    return (
        <>
            <HomeHero />
            <HeroFilter />
            <BestSelling />
            <NewProducts />
            <OurBlogs />
        </>
    );
};

export default Home;