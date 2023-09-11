// screens/CreateScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import MapView, { Polygon } from 'react-native-maps';

const MapScreen = ({ navigation }) => {
  const [coordinates, setCoordinates] = useState([]);
  const [showMap, setShowMap] = useState(false);

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

  return (
    <View style={styles.container}>
      {!showMap ? (
        <Button
          title="Show Map"
          onPress={() => setShowMap(true)}
        />
      ) : (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            onPress={handleMapPress}
            initialRegion={{
              latitude: 37.7749, // Latitude of your desired location
              longitude: -122.4194, // Longitude of your desired location
              latitudeDelta: 0.02, // Adjust as needed
              longitudeDelta: 0.02, // Adjust as needed
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
          </MapView>
          <Button
            title="Finish Drawing"
            onPress={finishDrawing}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
