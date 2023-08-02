import React, { useEffect, useState } from 'react'
import OurNavBar from '../../components/navbar/OurNavBar';
import HeroSection from '../../components/heroSection/HeroSection';
import ArticlesList from '../../components/articlesList/ArticlesList';
import GoToUpButton from '../../components/goToupButton/GoToUpButton';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    const [data, setData]= useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/category")
        .then(res => res.json())
        .then(result => setData(result))
        .catch(console.log);
    },[])
    console.log(data)
  return (
    <div>
    <OurNavBar />
    <HeroSection />
    <ArticlesList />
    <Footer />
    <GoToUpButton />
    </div>
  )
}

export default HomePage