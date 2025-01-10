 
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import apartments from './data/apartments'
import CustomMarker from './src/Components/CustomMarker';
import ApartmentListitem from './src/Components/ApartmentListitem';
import { useState } from 'react';
 
 
export default function AirBNB() {
  // console.log(apartments);
  const [selectedApartment, setSelectedApartment] = useState(null);
  return (
      
    <View>
       
      <MapView style={styles.map}
        provider={PROVIDER_GOOGLE}
        // initial region
        initialRegion={{
        latitude: -0.4233,
        longitude: 37.0675,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05, 

        }}
      
      >
        {apartments.map((apartment) => (
          < CustomMarker key={apartment.id} apartment={apartment} onPress={() => setSelectedApartment(apartment)} />))}
         

         
      </MapView>

      {/* apartment list item */}

      {selectedApartment && <ApartmentListitem apartment={selectedApartment} />}
      
    </View>
  );
}

 

const styles = StyleSheet.create({
  map:{
  with: '100%',
    height:'100%',
  },
})
 
