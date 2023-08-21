import React, {useState, useEffect} from "react";
import { FlatList, SafeAreaView, Text, ActivityIndicator} from "react-native";
import Config from "react-native-config";
import ProductCard from '../../components/ProductCard'
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";


const Products = ({navigation}) => {


    
    const {loading, data, error} = useFetch(Config.API_URL)

    const handleProductSelect = id => {
        navigation.navigate('DetailPage', {id})
    }

    const   renderProduct = ({item}) => 
    <ProductCard product = {item} onSelect = {() => handleProductSelect(item.id)}/>

    if(loading) {
        return <Loading />;
    }
    if (error) {
       return <Error />;
    }

    
    return(
        
            <FlatList data = {data} renderItem={renderProduct} />
        
    )
}

export default Products;