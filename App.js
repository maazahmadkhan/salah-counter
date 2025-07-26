// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@salah_counter';

export default function App() {
  const [count, setCount] = useState(0);

  // Load count from AsyncStorage when app starts
  useEffect(() => {
    const loadCount = async () => {
      try {
        const savedCount = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedCount !== null) {
          setCount(parseInt(savedCount));
        }
      } catch (error) {
        console.error('Failed to load count:', error);
      }
    };
    loadCount();
  }, []);

  // Save count to AsyncStorage when it changes
  useEffect(() => {
    const saveCount = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, count.toString());
      } catch (error) {
        console.error('Failed to save count:', error);
      }
    };
    saveCount();
  }, [count]);

  const increment = () => setCount((prev) => prev + 2);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 2 : 0));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salah Counter</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={increment} />
        <View style={{ width: 20 }} />
        <Button title="Decrement" onPress={decrement} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  counter: {
    fontSize: 48,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
