import React, { useState } from 'react'

type ProductCardProps = {
    productName: string;
    price: number;
    inStock: boolean;
};

const ProductCard = ({productName, price, inStock}: ProductCardProps) => {
    const [isInstock, setIsInStock] = useState<boolean>(inStock);

    const toggleInStock = () => {
        setIsInStock(!isInstock);
    }

  return (
    <div>
        <p>{isInstock ? "In Stock" : "Out of Stock"} - {productName} - ${price} <button onClick={toggleInStock}>toggle stock</button></p>
        
    </div>
  )
}

export default ProductCard
