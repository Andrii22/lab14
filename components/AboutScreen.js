import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import {movie} from "../mockData"

const AboutScreen = () => (
  <ScrollView>

    <Text>
      about
    </Text>
  </ScrollView>
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

export default AboutScreen;
