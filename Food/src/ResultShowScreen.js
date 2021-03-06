import React,{useState,useEffect} from 'react';
import {View ,Text,FlatList,StyleSheet} from 'react-native';
import yelp from './api/yelp';

const ResultShowScreen = ({route}) => {
  const {id}=route.params;
  console.log(id);
    const [result,setResult] = useState(null);
 

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
      };
      useEffect(() => {
        getResult(id);
      }, []);
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }} />;
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
      height: 200,
      width: 300
    }
  });

export default ResultShowScreen;
