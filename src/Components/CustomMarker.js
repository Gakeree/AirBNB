import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'
 

 

export default function CustomMarker({ apartment, onPress }) {
  return (
    <Marker
            onPress={onPress}
            key={apartment.id}
            coordinate={{
              latitude: apartment.latitude,
              longitude: apartment.longitude
            }}
        
      
          > 
            <View style={styles.marker}>
             <Text style={styles.markerText}>
              Ksh {apartment.price}
              </Text>
               
               
            </View>
            </Marker>
  )
}
const styles = StyleSheet.create({
  marker: {
    backgroundColor: 'rgba(122, 202, 10, 0.9)',
    paddingVertical:5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
   
    
  },
  markerText: {
    color: 'black',
    fontSize: 9,
    fontWeight: 'bold',
  },
});


 
 