import ProductListMWC from '../components/ProductListMWK';

const showitems = [
    {
      id: 1,
      name: 'Orange Fantasy1',
      price: 'This is the price of Product 1.',
      image: 'https://www.sportsdirect.com/images/products/62323802_h.jpg',
    },
    {
      id: 2,
      name: 'White Melody',
      price: 'This is the price of Product 2.',
      image: 'https://www.sportsdirect.com/images/products/62300803_h.jpg',
    },
    {
      id: 3,
      name: 'Orange Fantasy',
      price: 'This is the price of Product 2.',
      image: 'https://www.sportsdirect.com/images/products/37328301_h.jpg',
    },
    {
      id: 4,
      name: 'Green Leaf',
      price: 'This is the price of Product 2.',
      image: 'https://www.sportsdirect.com/images/products/29300601_h.jpg',
    },
    {
        id: 5,
        name: 'Orange Fantasy',
        price: 'This is the price of Product 1.',
        image: 'https://www.sportsdirect.com/images/products/29386113_h.jpg',
      },
      {
        id: 6,
        name: 'White Melody',
        price: 'This is the price of Product 2.',
        image: 'https://www.sportsdirect.com/images/products/62664301_h.jpg',
      },
      {
        id: 7,
        name: 'Orange Fantasy',
        price: 'This is the price of Product 2.',
        image: 'https://www.sportsdirect.com/images/products/62301103_h.jpg',
      },
      {
        id: 8,
        name: 'Green Leaf',
        price: 'This is the price of Product 2.',
        image: 'https://www.sportsdirect.com/images/products/59128827_h.jpg',
      },
    // Add more product objects as needed
  ];

export default function Kids() {
    return(
        <div className = "kidspage">

        <ProductListMWC showitems={showitems} />
    
      </div>

    )
}