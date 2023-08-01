import React,{useRef} from 'react';

const products = [
  {
    id: 1,
    title: "Product 1",
    imageSrc: "https://th.bing.com/th/id/OIP.Ce2m8qM-qT6o1vVpH-0OrAHaEo?pid=ImgDet&rs=1",
    description: "Get 15% off on Medicines",
    cashback: "RS. 50 cashback",
    price: "Rs. 54"
  },
  {
    id: 2,
    title: "Product 2",
    imageSrc: "https://th.bing.com/th/id/OIP.Ce2m8qM-qT6o1vVpH-0OrAHaEo?pid=ImgDet&rs=1",
    description: "Product 2 Description",
    cashback: "RS. 60 cashback",
    price: "Rs. 64"
  },
  {
    id: 2,
    title: "Product 2",
    imageSrc: "https://th.bing.com/th/id/OIP.Ce2m8qM-qT6o1vVpH-0OrAHaEo?pid=ImgDet&rs=1",
    description: "Product 2 Description",
    cashback: "RS. 60 cashback",
    price: "Rs. 64"
  },
  {
    id: 2,
    title: "Product 2",
    imageSrc: "https://th.bing.com/th/id/OIP.Ce2m8qM-qT6o1vVpH-0OrAHaEo?pid=ImgDet&rs=1",
    description: "Product 2 Description",
    cashback: "RS. 60 cashback",
    price: "Rs. 64"
  },
  {
    id: 2,
    title: "Product 2",
    imageSrc: "https://th.bing.com/th/id/OIP.Ce2m8qM-qT6o1vVpH-0OrAHaEo?pid=ImgDet&rs=1",
    description: "Product 2 Description",
    cashback: "RS. 60 cashback",
    price: "Rs. 64"
  },
  {
    id: 2,
    title: "Product 2",
    imageSrc: "https://th.bing.com/th/id/OIP.Ce2m8qM-qT6o1vVpH-0OrAHaEo?pid=ImgDet&rs=1",
    description: "Product 2 Description",
    cashback: "RS. 60 cashback",
    price: "Rs. 64"
  },
  {
    id: 2,
    title: "Product 2",
    imageSrc: "https://th.bing.com/th/id/OIP.Ce2m8qM-qT6o1vVpH-0OrAHaEo?pid=ImgDet&rs=1",
    description: "Product 2 Description",
    cashback: "RS. 60 cashback",
    price: "Rs. 64"
  },
  {
    id: 2,
    title: "Product 2",
    imageSrc: "https://th.bing.com/th/id/OIP.Ce2m8qM-qT6o1vVpH-0OrAHaEo?pid=ImgDet&rs=1",
    description: "Product 2 Description",
    cashback: "RS. 60 cashback",
    price: "Rs. 64"
  },
  {
    id: 2,
    title: "Product 2",
    imageSrc: "https://th.bing.com/th/id/OIP.Ce2m8qM-qT6o1vVpH-0OrAHaEo?pid=ImgDet&rs=1",
    description: "Product 2 Description",
    cashback: "RS. 60 cashback",
    price: "Rs. 64"
  },
  {
    id: 2,
    title: "Product 2",
    imageSrc: "https://th.bing.com/th/id/OIP.Ce2m8qM-qT6o1vVpH-0OrAHaEo?pid=ImgDet&rs=1",
    description: "Product 2 Description",
    cashback: "RS. 60 cashback",
    price: "Rs. 64"
  },
  // Add more products as needed
];

function Product({title}) {
  const productContainerRef = useRef(null);

  const scrollLeft = () => {
    const container = productContainerRef.current;
    container.scrollLeft -= container.offsetWidth;
  };

  const scrollRight = () => {
    const container = productContainerRef.current;
    container.scrollLeft += container.offsetWidth;
  };
  return (
    <div className='container'>
      <h1>{title}</h1>
      <div className='row'>
        <div className="col-md-12">
          <div className="product-container" ref={productContainerRef}>
            {products.map((product) => (
              <div key={product.id} className="product col-md-3">
                <div>
                  <img className="product_image" src={product.imageSrc} alt={product.title} />
                </div>
                <div>
                  <h5>{product.description}</h5>
                </div>
                <div>
                  <i className="fa fa-star">{product.cashback}</i>
                </div>
                <div className='product_price'>
                  <div><h3>{product.price}</h3></div>
                  <div><p>{product.price}</p></div>
                  <div><h5>{product.price}</h5></div>
                </div>
                <button className='product_button'>ADD</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='row action'>
        <div className="col-md-12 action_button  mt-3">
          <button onClick={scrollLeft} className='fa fa-angle-left'></button>
          <button onClick={scrollRight} className='fa fa-angle-right'></button>
        </div>
      </div>
    </div>
  );
}

export default Product;