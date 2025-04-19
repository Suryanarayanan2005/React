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
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

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

export default function LandDevelopmentScreen() {
  const [sfNumber, setSfNumber] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [soilType, setSoilType] = useState([]);
  const [landBenefit, setLandBenefit] = useState('');
  const [dateInspection, setDateInspection] = useState('');
  const [typeOfWork, setTypeOfWork] = useState([]);
  const [areaBenefited, setAreaBenefited] = useState('');
  const [otherWorks, setOtherWorks] = useState('');
  const [pradanContribution, setPradanContribution] = useState('');
  const [farmerContribution, setFarmerContribution] = useState('');
  const [totalEstimate, setTotalEstimate] = useState('');

  const handleToggle = (option, state, setState) => {
    if (state.includes(option)) {
      setState(state.filter((item) => item !== option));
    } else {
      setState([...state, option]);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <ScrollView contentContainerStyle={styles.inner}>
        {/* Land Development Form Heading */}
        <Text style={styles.heading_land}>LAND DEVELOPMENT FORM</Text>

        {/* Back Arrow and Heading Container */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => router.push("/Land_Form/lnd_own")} style={styles.backButton}>
            <Ionicons name="arrow-back" size={28} color="#0B8B42" />
          </TouchableOpacity>
          <Text style={styles.heading}>Land Development Activity</Text>
        </View>

        {/* Form fields */}
        <Text style={styles.label}>31. S.F. No. of the land to be developed</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter S.F. Number"
          placeholderTextColor="#888"
          value={sfNumber}
          onChangeText={setSfNumber}
        />

        <Text style={styles.label}>31.a) Latitude and Longitude</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 5 }]}
            placeholder="Latitude"
            placeholderTextColor="#888"
            value={latitude}
            onChangeText={setLatitude}
            keyboardType="numeric"
          />
          <TextInput
            style={[styles.input, { flex: 1, marginLeft: 5 }]}
            placeholder="Longitude"
            placeholderTextColor="#888"
            value={longitude}
            onChangeText={setLongitude}
            keyboardType="numeric"
          />
        </View>

        <Text style={styles.label}>32. Soil Type</Text>
        <CheckboxOption
          options={['Red Soil', 'Black Cotton', 'Sandy Loam', 'Laterite']}
          values={soilType}
          onToggle={(opt) => handleToggle(opt, soilType, setSoilType)}
        />

        <Text style={styles.label}>33. Land to benefit (ha)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter land area"
          placeholderTextColor="#888"
          value={landBenefit}
          onChangeText={setLandBenefit}
          keyboardType="numeric"
        />

        <Text style={styles.label}>36. Date of Inspection</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter date"
          placeholderTextColor="#888"
          value={dateInspection}
          onChangeText={setDateInspection}
        />

        <Text style={styles.label}>38. Type of work proposed</Text>
        <CheckboxOption
          options={['Prosopis removal', 'Redevelopment of eroded lands', 'Silt application', 'Other']}
          values={typeOfWork}
          onToggle={(opt) => handleToggle(opt, typeOfWork, setTypeOfWork)}
        />

        <Text style={styles.label}>39. Area benefited by proposed works (ha)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter area"
          placeholderTextColor="#888"
          value={areaBenefited}
          onChangeText={setAreaBenefited}
          keyboardType="numeric"
        />

        <Text style={styles.label}>40. Any other works proposed</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter details"
          placeholderTextColor="#888"
          value={otherWorks}
          onChangeText={setOtherWorks}
        />

        <Text style={styles.label}>41. PRADAN Contribution</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          placeholderTextColor="#888"
          value={pradanContribution}
          onChangeText={setPradanContribution}
          keyboardType="numeric"
        />

        <Text style={styles.label}>42. Farmer Contribution</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          placeholderTextColor="#888"
          value={farmerContribution}
          onChangeText={setFarmerContribution}
          keyboardType="numeric"
        />

        <Text style={styles.label}>43. Total Estimate Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          placeholderTextColor="#888"
          value={totalEstimate}
          onChangeText={setTotalEstimate}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.nextBtn} onPress={() => router.push('/Land_Form/bank_details')}>
          <Text style={styles.nextBtnText}>NEXT</Text>
        </TouchableOpacity>
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
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  heading_land: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B8B42',
    marginBottom: 10,
    textAlign: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    zIndex: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0B8B42',
    marginLeft: 10,
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
});
