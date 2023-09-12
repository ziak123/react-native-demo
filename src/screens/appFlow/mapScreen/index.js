// screens/CreateScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import MapView, { Polygon,PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Buttons } from '../../../components';
import { height, totalSize, width } from 'react-native-dimension';
import { AreaCardData, colors } from '../../../services';
import Spacer from '../../../components/spacer';
import { AreaCards } from '../../../components/listFile';

import Wrapper from '../../../components/wrapper';
import { styles } from './style';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

const MapScreen = ({ navigation }) => {
  //State
  const [coordinates, setCoordinates] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);

  // Handle user's tap on the map to add coordinates
  const handleMapPress = (event) => {
    const newCoordinate = event.nativeEvent.coordinate;
    setCoordinates([...coordinates, newCoordinate]);
  };

  // Finish drawing the polygon and navigate back to the Create screen
  const finishDrawing = () => {
    if (coordinates.length === 0) {
      alert('Please draw an area on the map before finishing.');
      return;
    }
    // Save the coordinates to your data structure (e.g., Redux store or state management)
    // You can also add a name for the area here if needed
    // Navigate back to the Create screen
    navigation.goBack();
  };

  // Handle selecting an area
  const handleAreaSelection = (area) => {
    setSelectedArea(area);
  };

  return (
    <Wrapper style={styles.container}>
        <Spacer isBasic/>
      {!showMap ? (
        <Wrapper>
          <Wrapper alignItemsFlexStart style={styles.lefticon}>
        <Icon  name='arrowleft' type='antdesign' onPress={()=>navigation.goBack()}/>
        </Wrapper>
        <Spacer isTiny/>
        <Buttons.Colored
        onPress={() => setShowMap(true)}
          text="Create"
          buttonStyle={styles.btn} 
        />
        <Spacer isBasic/>
        <AreaCards data={AreaCardData}/>
        </Wrapper>
      ) : (
        <Wrapper style={styles.mapContainer}>
          <Wrapper alignItemsFlexStart style={styles.lefttoback}>
        <Icon  name='arrowleft' type='antdesign' onPress={finishDrawing}/>
        </Wrapper>
          <MapView
           provider={PROVIDER_GOOGLE}
            style={styles.map}
            onPress={handleMapPress}
            initialRegion={{
              latitude: 37.7749,
              longitude: -122.4194,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
          >
            {coordinates.length > 2 && (
              <Polygon
                coordinates={coordinates}
                strokeColor="rgba(0, 0, 255, 0.7)"
                fillColor="rgba(0, 255, 0, 0.5)"
                strokeWidth={2}
              />
            )}

            {/* Display selected area as a Polygon */}
            {selectedArea && (
              <Polygon
                coordinates={selectedArea.coordinates}
                strokeColor="rgba(255, 0, 0, 0.7)"
                fillColor="rgba(255, 0, 0, 0.5)"
                strokeWidth={2}
              />
            )}

            {/* Display selected area as a Marker */}
            {selectedArea && (
              <Marker
                coordinate={selectedArea.coordinates[0]} // Use any coordinate from the area
                title={selectedArea.name}
                description={`Area: ${selectedArea.areaSqFt} sqft`} // Assuming you have area information
              />
            )}
          </MapView>
        </Wrapper>
      )}
    </Wrapper>
  );
};
export default MapScreen;
