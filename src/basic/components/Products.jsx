import React, { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {
  // const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({salesOnly : checked});
  const handleChange = () => setChecked((prev) => !prev);


  if (loading) return <div>Loading...</div>

  if (error) return <div>{error}</div>
  
  return (
    <>
      {
        loading ? (
          <div>Loading...</div>
        ):''
      }
      
      <input type="checkbox" id="chkSale" value={checked} onChange={handleChange} />
      <label htmlFor="chkSale">Show only Hot Sale!</label>
      <ul>
        {products.map((product) => (   
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
        ))}
      </ul>
      {/* <button onClick={()=> setCount((prev) => prev + 1)}> {count} </button> */}
    </>
  );
}
