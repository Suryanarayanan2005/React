import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { router } from 'expo-router';

const mockData = [
  { id: 1, name: 'John Doe', form: 'Type A', date: '2025-04-10' },
  { id: 2, name: 'Jane Smith', form: 'Type B', date: '2025-04-11' },
  { id: 3, name: 'Alice Johnson', form: 'Type C', date: '2025-04-12' },
  // Add more mock data as needed
];

const BioContainer = ({ name, form, date, onPress }) => (
  <TouchableOpacity onPress={() => { router.push("/dashboard"); }} style={styles.bioContainer}>
    <View style={styles.leftContainer}>
      <Text style={styles.name}>{name}</Text>
    </View>
    <View style={styles.rightContainer}>
      <Text style={styles.rightText}>
        <Text style={styles.label}>Form: </Text>{form}
      </Text>
      <Text style={styles.rightText}>
        <Text style={styles.label}>Date: </Text>{date}
      </Text>
    </View>
  </TouchableOpacity>
);

const FormSubmissionsScreen = ({ navigation, route }) => {
  const handleBioPress = (item) => {
    // Example action when bio box is pressed
    console.log('Bio pressed:', item);
    // You can navigate to another screen here
    router.push(`/bioDetails/${item.id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => { router.push("/dashboard"); }}
          iconColor="#fff"
        />
        <Text style={styles.title}>DRAFT</Text>
      </View>

      {/* Separator Line */}
      <View style={styles.separator} />

      <ScrollView style={styles.scrollView}>
        {mockData.length === 0 ? (
          <Text style={styles.noResults}>No forms found</Text>
        ) : (
          mockData.map((item) => (
            <Card key={item.id} style={styles.card}>
              <BioContainer
                name={item.name}
                form={item.form}
                date={item.date}
                onPress={() => handleBioPress(item)}
              />
            </Card>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1B5E20',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 16,
    elevation: 4,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: -5,
    flex: 1, // Ensures text takes up remaining space
    textAlign: 'left', // Centers the title
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginTop: 60, // Adjust the space below the fixed header
  },
  scrollView: {
    marginTop: 30, // Adjust space for the fixed header
    paddingHorizontal: 16,
  },
  noResults: {
    textAlign: 'center',
    fontSize: 18,
    color: '#888',
  },
  card: {
    marginBottom: 12,
    backgroundColor: '#F5F5F5',
    elevation: 5,
    borderRadius: 10,
    padding: 12,
  },
  bioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  leftContainer: {
    flex: 1.2,
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 0.9,
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#388E3C',
  },
  rightText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'left',
    width: '100%',
    marginBottom: 2,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default FormSubmissionsScreen;
