import React from 'react';

import ProductListMWC from '../components/ProductListMWK';

const showitems = [
    {
      id: 1,
      name: 'Orange Fantasy',
      price: '£90',
      image: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_661604_b&qlt=92&w=363&h=463&v=1&fmt=auto&bg=rgb(238,238,238)',
    },
    {
      id: 2,
      name: '£44',
      price: 'This is the price of Product 2.',
      image: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_661601_plc&qlt=92&w=363&h=463&v=1&fmt=auto',
    },
    {
      id: 3,
      name: 'Orange Fantasy',
      price: '£20',
      image: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_611634_b&qlt=92&exclusive=0&w=363&h=463&v=1&fmt=auto&bg=rgb(238,238,238)',
    },
    {
      id: 4,
      name: 'Green Leaf',
      price: '£55',
      image: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_676814_b&qlt=92&exclusive=0&w=363&h=463&v=1&fmt=auto&bg=rgb(238,238,238)',
    },
    {
        id: 5,
        name: 'Orange Fantasy',
        price: '£22',
        image: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_676818_b&qlt=92&w=363&h=463&v=1&fmt=auto&bg=rgb(238,238,238)',
      },
      {
        id: 6,
        name: 'White Melody',
        price: '£45',
        image: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_676821_b&qlt=92&exclusive=0&w=363&h=463&v=1&fmt=auto&bg=rgb(238,238,238)',
      },
      {
        id: 7,
        name: 'Orange Fantasy',
        price: '£55',
        image: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_639067_b&qlt=92&w=363&h=463&v=1&fmt=auto&bg=rgb(238,238,238)',
      },
      {
        id: 8,
        name: 'Green Leaf',
        price: '£45',
        image: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_649761_b&qlt=92&offer_51=0&w=363&h=463&v=1&fmt=auto&bg=rgb(238,238,238)',
      },
    // Add more product objects as needed
  ];



  export default function Mens() {
    return(
    


    <div className = "menspage">

  
     <ProductListMWC showitems={showitems} />



    </div>
   

    )
}