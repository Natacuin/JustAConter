import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        accessibilityLabel="Add"
        style={styles.addButton}
        onPress={() => setCount(c => c + 1)}
      >
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>

      <Text style={styles.counter}>{count}</Text>

      <TouchableOpacity
        accessibilityLabel="Reset"
        style={styles.resetButton}
        onPress={() => setCount(0)}
      >
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: '#0a84ff',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  addText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '600',
  },
  counter: {
    fontSize: 48,
    fontWeight: '700',
    marginBottom: 24,
  },
  resetButton: {
    backgroundColor: '#e5e5ea',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  resetText: {
    color: '#111',
    fontSize: 16,
    fontWeight: '600',
  },
});
