import ProductPreview from "../components/productPreview"
import { useParams } from "react-router-dom";

function SingleProduct(){
    const { id } = useParams()
    return(
        <>
            <h1> Single Product {id} </h1>
            <ProductPreview />
        </>
        
    );
}
export default SingleProduct;