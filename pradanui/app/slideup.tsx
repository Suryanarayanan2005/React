import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router';

export default function SlideUpFormSelector() {
  const [modalVisible, setModalVisible] = useState(true); // Set to false if needed

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Land Form</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Pond Form</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Plantation Form</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.optionButton, styles.cancelButton]}
              onPress={() => router.back()
              }
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// PRADAN THEMED STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3fdf6',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    elevation: 10,
  },
  optionButton: {
    backgroundColor: '#4CAF50', // PRADAN Green
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 4,
  },
  optionText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#e0e0e0',
  },
  cancelText: {
    color: '#333333',
    fontSize: 17,
    fontWeight: '600',
  },
});