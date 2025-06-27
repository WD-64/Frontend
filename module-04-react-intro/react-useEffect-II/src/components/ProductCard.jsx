const ProductCard = ({ product }) => {
  return (
    <div className='card bg-base-100 w-96 shadow-sm m-4'>
      <figure>
        <img src={product.image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{product.title}</h2>
        <p>{product.description}</p>
        <p>€ {product.price}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
