import React from 'react';
import axios from "axios";
import Product from "../Product";
import DEFAULTS from "../../constants/defaults";
import {useRouter} from "next/router";

const ProductList = React.memo(({name = DEFAULTS.searchItem,showMore,title,page,itemsToLoad = 12,...props}) => {

  const [data,setData] = React.useState([]);
  const router = useRouter();

  const loadMore = () => {
    router.push({ pathname: "/search", query: { q: name , p: 1} });
  }

  React.useEffect( () => {
    (async () => {
      try {
        const res = await axios.get(`/api/getImages?query=${name}&page=${page}&per_page=${itemsToLoad}`);
        const td = res.data.results;
        setData(td.map((item) => {
            return {
              id: item.id,
              name: item.user.name,
              brand: name,
              price: Math.round(Math.random() * 1000),
              src: item.urls.small,
              alt: item.alt_description,
              size: 200,
              thumb: item.urls.thumb,
            }
          }
        ))
      }
      catch (error) {
        console.error(error);
      }
    })()

  }, [name,page]);

  return (
    <div className="px-2 py-4  bg-white">
      { title &&
        <div className="flex px-4 pb-6 justify-between">
          <h2 className="text-lg font-semibold">
            {title}
          </h2>
          {showMore && <button onClick={loadMore}>More items</button>}
        </div>
      }
      <div className="flex flex-wrap gap-4 justify-center">
        {data.map((item) => {
          return <Product key={item.id} {...item} />
        })}
      </div>

    </div>
  );
});

ProductList.displayName = "ProductList";
export default ProductList;
