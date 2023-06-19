import ProductListMWC from '../components/ProductListMWK';

const showitems = [
    {
      id: 1.0,
      name: 'Orange Fantasy1',
      price: 'This is the price of Product 1.',
      image: 'https://media.boohoo.com/i/boohoo/gzz47422_washed%20khaki_xl?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    },
    {
      id: 2.0,
      name: 'White Melody',
      price: 'This is the price of Product 2.',
      image: 'https://media.boohoo.com/i/boohoo/fzz00760_grey_xl?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    },
    {
      id: 3.0,
      name: 'Orange Fantasy',
      price: 'This is the price of Product 2.',
      image: 'https://media.boohoo.com/i/boohoo/fzz13520_charcoal_xl?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    },
    {
      id: 4.0,
      name: 'Green Leaf',
      price: 'This is the price of Product 2.',
      image: 'https://media.boohoo.com/i/boohoo/gzz57158_white_xl?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    },
    {
        id: 5.0,
        name: 'Orange Fantasy',
        price: 'This is the price of Product 1.',
        image: 'https://media.boohoo.com/i/boohoo/bzz01102_dusty%20rose_xl?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      },
      {
        id: 6.0,
        name: 'White Melody',
        price: 'This is the price of Product 2.',
        image: 'https://media.boohoo.com/i/boohoo/tzz02241_grey_xl?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      },
      {
        id: 7.0,
        name: 'Orange Fantasy',
        price: 'This is the price of Product 2.',
        image: 'https://media.boohoo.com/i/boohoo/gzz52977_black_xl?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      },
      {
        id: 8.0,
        name: 'Green Leaf',
        price: 'This is the price of Product 2.',
        image: 'https://media.boohoo.com/i/boohoo/gzz37415_black_xl?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      },
    // Add more product objects as needed
  ];

export default function Women() {
    return(
      
  <div className = "womenspage">

   
    <ProductListMWC showitems={showitems} />

  </div>
    )
}