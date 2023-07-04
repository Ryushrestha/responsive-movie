"use client"
import { getBrowseFeatured } from '@/service/service.axios'
import React, { useEffect, useState } from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";
import BodyCard from './BodyCard';
// import { Fade, Slide } from 'react-slideshow-image';

const BodyCarousel = () => {
    const [featuredMovie, setFeaturedMovie] = useState([])
    const getFeatured = async () => {

        const data = await getBrowseFeatured()
        const collections = data.results.slice(10,19)
        setFeaturedMovie(collections)
    }
    useEffect(() => {
        getFeatured()
    }, [])
    console.log(featuredMovie)


    var $ = require("jquery");
    if (typeof window !== "undefined") {
        window.$ = window.jQuery = require("jquery");
    }

    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
        ssr: false,
    });
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,

        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    };
    return (

        <OwlCarousel
            className="owl-theme mt-10"
            loop
            margin={4}
            nav={true}
            dots={false}
            animateIn={true}
            
            {...options}
        >
            {
                featuredMovie.map((movie) => {
                    return <BodyCard key={movie.id} actualData={movie}/>
                })
            }

        </OwlCarousel>
    )
}

export default BodyCarousel