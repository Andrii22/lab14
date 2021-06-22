import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Movie = ({ movie, navigation }) => (
  <TouchableOpacity onPress={()=>{navigation.navigate("About", {name: movie.Title})}}>
  <Image style = {styles.poster} source = {{uri: movie.Poster}}/>
    <Text style = {styles.title}>{movie.Title}</Text>
    <Text>
      {movie.Year}({movie.Type})
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'Bold',
  },
  poster:{
    width: 400,
    height: 400, 
    resizeMode:"center"
  }
});

export default Movie;
