import Head from 'next/head'
import Image from 'next/image'
import BWImage from "../src/components/BWImage";
import Footer from "../src/components/Footer";
import TopNav from "../src/components/TopNav";
import Product from "../src/components/Product";
import ProductList from "../src/components/ProductList";
import Paginated from "../src/components/Paginated";
import React from "react";
import {useRouter} from "next/router";
import Leader from "../src/components/Leader";
import DEFAULTS from "../src/constants/defaults";

export default function Home() {

  const router = useRouter();
  const pageNumber = router.query.p || 1;
  const name = router.query.q;

  const onPrev = () => {
    router.push({
      pathname: "/search",
      query: {
        q: name || DEFAULTS.searchItem,
        p: pageNumber - 1
      }
    }).then(() => window.scrollTo(0, 0));
  }
  const onNext = () => {
    router.push({
      pathname: "/search",
      query: {
        q: name || DEFAULTS.searchItem,
        p: +pageNumber + 1
      }
    }).then(() => window.scrollTo(0, 0));
  }

  return (
    <div>
      <Head>
        <title>nETHer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />
      <header>
        <Leader />
      </header>
      <main className="py-4" id="main">

        <div className={"mb-2"}>
          <ProductList name={"watch"} showMore page={1} itemsToLoad={6} title="Watches for your style" />
        </div>

        <div className={"mb-2"}>
          <ProductList name={"card"} showMore page={1} itemsToLoad={6} title="Gift Cards for your loved ones" />
        </div>

        <div className={"mb-2"}>
          <ProductList name={"car"} showMore page={1} itemsToLoad={6} title="Cars for your comfort" />
        </div>

      {/*  a square box*/}
        <div className={"flex gap-4"}>
         <ProductList name={name} page={pageNumber} title="More items to explore" />
        </div>
        <div className={"flex justify-center pt-3"}>
          <Paginated pageNumber={pageNumber} onPrev={onPrev} onNext={onNext} />
        </div>

      </main>

      <Footer />

    </div>
  )
}
