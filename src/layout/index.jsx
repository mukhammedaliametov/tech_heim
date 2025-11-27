import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Loading from '../components/loading';

const MainLayout = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <div>
            {loading ? <Loading /> : <>
            <Header />
            <Outlet />
            <Footer />
            </>}
        </div>
    );
};

export default MainLayout;
