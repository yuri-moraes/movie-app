import { Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const MovieDetails = () => {

    const {id} = useLocalSearchParams();

  return (
    <View>
      <Text>Movie details: {id}</Text>
    </View>
  )
}

export default MovieDetails