import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

import Movie from "../components/Movie"


import {search} from "../mockData";

export default class extends React.Component {
  render() {
    return <View style={styles.container}>
    <TextInput placeholder="Search..."/>
    <ScrollView>
    {search.Search.map(movie=>(<Movie movie={movie} navigation={this.props.navigation}/>))}
    
    </ScrollView>

    Search screen</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
