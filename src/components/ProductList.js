import {useEffect} from 'react';
import {connect} from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
const mapStateToProps = state =>({data:state});
const mapDispatchToProps = dispatch=>({
    fetchingData: ()=>dispatch(fetchProducts())
})
function ProductList(props){
    console.log(props)
    useEffect(()=>{
        props.fetchingData();
    },[])
    console.log("products", props.data)
    return(
        <>
            <h1>All Products</h1>
        </>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList);