import React from "react";
import {Text , Image, View} from "react-native";
import styles from './Detail.style'
import useFetch from "../../hooks/useFetch/useFetch";
import Config from "react-native-config";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Detail = ({route}) => {
    const {id} = route.params;
    const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);
    console.log(id);
  
    if(loading) {
        return <Loading />;
    }
    if (error) {
       return <Error />;
    }

    

    return(
       
        <View style = {styles.container}>
            <Image  source = {{uri: data.image}} style = {styles.image} />
        <View style = {styles.body_container}>
            <Text style = {styles.title}>{data.title}</Text>
            <Text style = {styles.desc}>{data.description}</Text>
            <Text style = {styles.price}>{data.price} TL</Text>
            </View>
        </View>          
    )
}

export default Detail;