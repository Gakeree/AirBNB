import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
 
 
 
const ApartmentListitem = ({ apartment }) => {
    
  return (
      <View style={styles.card}>
          <Image source={ apartment.image } style={styles.image} />
          <View style={styles.rightContainer}>
              <View>
                  <Text style={styles.title}>{apartment.title}</Text>
                  <Text style={styles.description}>Stay at this Apartment</Text>
                  <View style={styles.footer}>
                      <Text style={styles.price}>Ksh {apartment.price}</Text>
                      <Text style={styles.price}>
                      ⭐{apartment.rating} ({apartment.stars})
                      </Text>
                      
                </View>
              </View>
              
         </View>
    </View>
  )
}

export default ApartmentListitem

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 70,
        padding: 10,
        left: 10,
        right: 10,
        flexDirection: 'row',
        borderRadius: 20,
        overflow:'hiddden'
    },
    image: {
        width: 150,
        aspectRatio:1,
        borderRadius:10
        
        
    },
        
    title: {
        fontFamily: 'InterBold',
        marginBottom: 10,
        fontSize:16
        
    },
    price: {
        fontFamily:'InterBold'
    },
    rightContainer: {
        padding: 10,
        flex:1
        
    },
    description: {
        color:'gray'
        
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
        
    }
})