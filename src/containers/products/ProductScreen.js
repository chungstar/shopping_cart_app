import React from 'react'
import ProductItem from '../../components/product/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { PageHeading, ProductContainerStyle } from '../../styles/ProductScreen'
import { listProducts } from '../../actions/productActions'

const ProductScreen = () => {
    const dispatch = useDispatch()

    const productsList = useSelector((state)=>state.productsList)

    const {loading, error, products} = productsList
    
    React.useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])

    return (
        <div>
            {loading ? (
                <div>loading...</div>
            ) : error?(
                <div>{error}</div>
            ) : (
                <>
                <PageHeading primary>Products</PageHeading>
                <ProductContainerStyle primary>
                {products&&products.map((item)=>(
                    <ProductItem item = {item} />
                ))}
                </ProductContainerStyle>
                </>
            )
            }
            
        </div>
    )
}

export default ProductScreen