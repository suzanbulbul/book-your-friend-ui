import React from "react";
import { useRouter } from 'next/router';

// Components
import Header from "../../components/Header/header";


const Home = () => {
  const router = useRouter();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
