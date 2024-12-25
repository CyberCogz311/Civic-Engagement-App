import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { accelerometer, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors';

setUpdateIntervalForType(SensorTypes.accelerometer, 1000); // Update every second

export default function ActivityTracker() {
  const [movementData, setMovementData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const subscription = accelerometer.subscribe(({ x, y, z }) => {
      setMovementData({ x, y, z });
    });

    return () => subscription.unsubscribe();
  }, []);

  const calculateActivityScore = () => {
    const activityScore = Math.abs(movementData.x) + Math.abs(movementData.y) + Math.abs(movementData.z);
    return activityScore;
  };

  const handleReward = async () => {
    const activityScore = calculateActivityScore();
    // Call blockchain to issue reward
  };

  return (
    <View>
      <Text>Body Activity Score: {calculateActivityScore()}</Text>
      <Button title="Submit Activity" onPress={handleReward} />
    </View>
  );
}
