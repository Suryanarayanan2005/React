import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const RadioOption = ({ options, value, onChange }) => (
  <View style={styles.radioGroup}>
    {options.map((opt) => (
      <TouchableOpacity key={opt} style={styles.radioOption} onPress={() => onChange(opt)}>
        <Ionicons
          name={value === opt ? 'radio-button-on' : 'radio-button-off'}
          size={20}
          color="#0B8B42"
        />
        <Text style={styles.radioText}>{opt}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const CheckboxOption = ({ options, values, onToggle }) => (
  <View style={styles.checkboxGroup}>
    {options.map((opt) => (
      <TouchableOpacity key={opt} style={styles.checkboxOption} onPress={() => onToggle(opt)}>
        <Ionicons
          name={values.includes(opt) ? 'checkbox' : 'square-outline'}
          size={20}
          color="#0B8B42"
        />
        <Text style={styles.radioText}>{opt}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default function LandFormScreen() {
  const navigation = useNavigation(); // Hook for navigation

  const [ownership, setownership] = useState('');
  const [irrigation, setIrrigation] = useState('');
  const [areaIrrigated, setAreaIrrigated] = useState('');
  const [rainfed, setRainfed] = useState('');
  const [tankfed, setTankfed] = useState('');
  const [wellfed, setWellfed] = useState('');
  const [pattaNumber, setPattaNumber] = useState('');
  const [totalArea, setTotalArea] = useState('');
  const [revenueVillage, setRevenueVillage] = useState(null);
  const [cropSeason, setCropSeason] = useState('');
  const [otherCropSeason, setOtherCropSeason] = useState('');
  const [livestock, setLivestock] = useState([]);

  const handleToggleLivestock = (option) => {
    if (livestock.includes(option)) {
      setLivestock(livestock.filter((item) => item !== option));
    } else {
      setLivestock([...livestock, option]);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <ScrollView contentContainerStyle={styles.inner}>
        <Animatable.View animation="fadeInUp" duration={600}>
          <Text style={styles.heading_land}>LAND REDEVELOPMENT FORM</Text>

          <View style={styles.headingContainer}>
            <TouchableOpacity onPress={() => router.push("/Land_Form/Basic details")}>
              <Ionicons name="arrow-back" size={24} color="#0B8B42" />
            </TouchableOpacity>
            <Text style={styles.heading}>Land Ownership & Livestock Details</Text>
          </View>
{/* 24. Well for Irrigation */}
<Text style={styles.label}>23.Land Ownership</Text>
          <RadioOption
            options={['Owner Cultivator', 'Lease Holder']}
            value={ownership}
            onChange={(val) => {
              setownership(val);
              if (val !== 'Yes') setownership('');
            }}
          />
          {/* 24. Well for Irrigation */}
          <Text style={styles.label}>24. Well for Irrigation</Text>
          <RadioOption
            options={['Yes', 'No']}
            value={irrigation}
            onChange={(val) => {
              setIrrigation(val);
              if (val !== 'Yes') setAreaIrrigated('');
            }}
          />

          {irrigation === 'Yes' && (
            <>
              <Text style={styles.label}>Area irrigated (ha)</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Enter area irrigated"
                placeholderTextColor="#888"
                value={areaIrrigated}
                onChangeText={setAreaIrrigated}
              />
            </>
          )}

          {/* 25. Irrigated Lands */}
          <Text style={styles.label}>25. Irrigated Lands (ha)</Text>
          <View style={styles.irrigationRow}>
            <TextInput
              style={[styles.input, styles.irrigationInput]}
              placeholder="Rainfed"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={rainfed}
              onChangeText={setRainfed}
            />
            <TextInput
              style={[styles.input, styles.irrigationInput]}
              placeholder="Tankfed"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={tankfed}
              onChangeText={setTankfed}
            />
            <TextInput
              style={[styles.input, styles.irrigationInput]}
              placeholder="Well irrigated"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={wellfed}
              onChangeText={setWellfed}
            />
          </View>

          {/* 26. Patta Number */}
          <Text style={styles.label}>26. Patta Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter patta number"
            placeholderTextColor="#888"
            value={pattaNumber}
            onChangeText={setPattaNumber}
          />

          {/* 27. Total Area */}
          <Text style={styles.label}>27. Total Area (ha)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter total area"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={totalArea}
          />
          {/* 28. Revenue Village (Dropdown) */}
          <Text style={styles.label}>28. Taluk</Text>
          <View style={{ zIndex: 1000, marginBottom: 10 }}>
            <TextInput
              style={styles.input}
              placeholder="Enter Taluk"
              placeholderTextColor="#888"

            />
          </View>
          {/* 28. Revenue Village (Dropdown) */}
          <Text style={styles.label}>29. Firka</Text>
          <View style={{ zIndex: 1000, marginBottom: 10 }}>
            <TextInput
              style={styles.input}
              placeholder="Enter Firka"
              placeholderTextColor="#888"

            />
          </View>

          {/* 28. Revenue Village (Dropdown) */}
          <Text style={styles.label}>30. Revenue Village</Text>
          <View style={{ zIndex: 1000, marginBottom: 10 }}>
            <TextInput
              style={styles.input}
              placeholder="Enter revenue village"
              placeholderTextColor="#888"
            />
          </View>

          {/* 29. Crop Season */}
          <Text style={styles.label}>31. Crop Season</Text>
          <RadioOption
            options={['Kharif (Jun - Sept)', 'Rabi (Oct - Dec)', 'Other']}
            value={cropSeason}
            onChange={setCropSeason}
          />

          {cropSeason === 'Other' && (
            <TextInput
              style={styles.input}
              placeholder="Specify other crop season"
              placeholderTextColor="#888"
              value={otherCropSeason}
              onChangeText={setOtherCropSeason}
            />
          )}

          {/* 30. Livestock at Home */}
          <Text style={styles.label}>32. Livestock at Home</Text>
          <View style={styles.irrigationRow}>
            <TextInput
              style={[styles.input, styles.irrigationInput]}
              placeholder="Goat"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={rainfed}
              onChangeText={setRainfed}
            />
            <TextInput
              style={[styles.input, styles.irrigationInput]}
              placeholder="Sheep"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={tankfed}
              onChangeText={setTankfed}
            />
            <TextInput
              style={[styles.input, styles.irrigationInput]}
              placeholder="Milch Animals"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={wellfed}
              onChangeText={setWellfed}
            />
          </View><View style={styles.irrigationRow}>
            <TextInput
              style={[styles.input, styles.irrigationInput]}
              placeholder="Draught Animals"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={rainfed}
              onChangeText={setRainfed}
            />
            <TextInput
              style={[styles.input, styles.irrigationInput]}
              placeholder="Poultry"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={tankfed}
              onChangeText={setTankfed}
            />
            <TextInput
              style={[styles.input, styles.irrigationInput]}
              placeholder="Others"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={wellfed}
              onChangeText={setWellfed}
            />
          </View>
          

          <TouchableOpacity
            style={styles.nextBtn}
           onPress={() => {
                                                           router.push('/Land_Form/land_develop_act');
                                                         }}>
            <Text style={styles.nextBtnText}>NEXT</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F7ED',
  },
  inner: {
    padding: 20,
    paddingBottom: 20,
  },
  heading_land: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B8B42',
    marginBottom: 20,
    textAlign: 'center',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0B8B42',
    marginLeft: 10, // Adds space between the arrow and text
  },
  label: {
    fontSize: 14,
    marginVertical: 8,
    color: '#333',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#A5D6A7',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#E8F5E9',
    color: '#333',
    fontSize: 14,
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 8,
  },
  checkboxGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  checkboxOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 8,
  },
  radioText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
  },
  irrigationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  irrigationInput: {
    flex: 1,
    marginRight: 8,
  },
  nextBtn: {
    backgroundColor: '#134e13',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  nextBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dropdown: {
    borderColor: '#A5D6A7',
    backgroundColor: '#E8F5E9',
    borderRadius: 10,
    minHeight: 45,
    paddingHorizontal: 10,
  },
  dropdownContainer: {
    borderColor: '#A5D6A7',
    backgroundColor: '#F1F7ED',
    borderRadius: 10,
  },
});
