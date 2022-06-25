import Head from 'next/head'
import Footer from "../src/components/Footer";
import TopNav from "../src/components/TopNav";
import ProductList from "../src/components/ProductList";
import Paginated from "../src/components/Paginated";
import React from "react";
import {useRouter} from "next/router";

export default function Home() {

  const router = useRouter();
  const pageNumber = router.query.p || 1;
  const name = router.query.q;

  const onPrev = () => {
    router.push({
      pathname: "/search",
      query: {
        q: name,
        p: pageNumber - 1
      }
    }).then(() => window.scrollTo(0, 0));
  }
  const onNext = () => {
    router.push({
      pathname: "/search",
      query: {
        q: name,
        p: +pageNumber + 1
      }
    }).then(() => window.scrollTo(0, 0));
  }

  return (
    <div>
      <Head>
        <title>Search for items</title>
        <meta name="description" content="Search for nether items" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />
      <main className="py-4">

      {/*  a square box*/}
        <div className={"flex gap-4"}>
         <ProductList name={name} page={pageNumber}  title={`Showing results for "${name}"`}/>
        </div>
        <div className={"flex justify-center mt-6"}>
          <Paginated pageNumber={pageNumber} onPrev={onPrev} onNext={onNext} />
        </div>

      </main>

      <Footer />

    </div>
  )
}
