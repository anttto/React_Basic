import { useEffect, useState } from 'react';

export default function useProducts({salesOnly}){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setLoading(true);
        setError(undefined);

        fetch(`data/${salesOnly?'sale_' : ''}products.json` 
          ).then(
          (res) => res.json()
        ).then(
          (data) => {
            // console.log("뜨끈한 데이터를 네트워크에서 받아옴");
            setProducts(data);
          }
        ).catch(
          (error) => setError(`${error}라는 에러가 발생했습니다.`)
        ).finally(() => setLoading(false)
        );
        //정리하는 반환된 콜백
        return () => {
          // console.log("청소");
        }
      }, [salesOnly]); //디펜던시 (새로운 데이터를 갱신할때 변화되는 스테이트를 넣어줌)
    
      return [loading, error, products];
}