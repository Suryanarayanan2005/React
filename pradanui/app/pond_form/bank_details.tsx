import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { router } from 'expo-router';

export default function BankDetailsForm() {
  const [accountHolder, setAccountHolder] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [branch, setBranch] = useState('');
  const [ifsc, setIFSC] = useState('');
  const [contribution, setContribution] = useState('');

  const [files, setFiles] = useState({
    patta: null,
    idCard: null,
    fmb: null,
    photo: null,
    passbook: null,
    geoTagged: null, // Added for geo-tagged photo
  });

  const handleFilePick = async (field) => {
    const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
    if (result?.assets && result.assets.length > 0 && result.assets[0].uri) {
      setFiles((prev) => ({ ...prev, [field]: result.assets[0] }));
    }
  };

  const handleGeoTaggedPhotoPick = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted' || locationStatus !== 'granted') {
      Alert.alert('Permissions required', 'Camera and location permissions are needed.');
      return;
    }

    const imageResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.7,
    });

    if (!imageResult.canceled && imageResult.assets.length > 0) {
      const location = await Location.getCurrentPositionAsync({});
      const { uri } = imageResult.assets[0];
      setFiles((prev) => ({
        ...prev,
        geoTagged: {
          uri,
          location: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
        },
      }));
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <ScrollView contentContainerStyle={styles.inner}>
        <Animatable.View animation="fadeInUp" duration={600}>
          <Text style={styles.heading_land}>FARM POND FORM</Text>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                router.push("/pond_form/design_of_farm_pond");
              }}
              style={styles.backButton}
            >
              <Ionicons name="arrow-back" size={24} color="#0B8B42" />
            </TouchableOpacity>
            <Text style={styles.heading}>Bank Details</Text>
          </View>

          <Text style={styles.label}>45. Name of Account Holder</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter name"
            placeholderTextColor="#888"
            value={accountHolder}
            onChangeText={setAccountHolder}
          />

          <Text style={styles.label}>46. Account Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter account number"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={accountNumber}
            onChangeText={setAccountNumber}
          />

          <Text style={styles.label}>47. Name of the Bank</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter bank name"
            placeholderTextColor="#888"
            value={bankName}
            onChangeText={setBankName}
          />

          <Text style={styles.label}>48. Branch</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter branch name"
            placeholderTextColor="#888"
            value={branch}
            onChangeText={setBranch}
          />

          <Text style={styles.label}>49. IFSC</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter IFSC code"
            placeholderTextColor="#888"
            value={ifsc}
            onChangeText={setIFSC}
          />

          <Text style={styles.label}>50. Farmer has agreed for the work, and his contribution</Text>
          <View style={styles.radioGroup}>
            {['Yes', 'No'].map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.radioOption}
                onPress={() => setContribution(option)}
              >
                <Ionicons
                  name={contribution === option ? 'radio-button-on' : 'radio-button-off'}
                  size={20}
                  color="#0B8B42"
                />
                <Text style={styles.radioText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>51. Files submitted:</Text>
          <View style={styles.uploadGroup}>
            {[{ label: 'Patta', key: 'patta', onPress: () => handleFilePick('patta') },
              { label: 'ID Card', key: 'idCard', onPress: () => handleFilePick('idCard') },
              { label: 'FMB', key: 'fmb', onPress: () => handleFilePick('fmb') },
              { label: 'Photo of Farmer', key: 'photo', onPress: () => handleFilePick('photo') },
              { label: 'Bank Passbook', key: 'passbook', onPress: () => handleFilePick('passbook') },
              { label: 'Geo-tagged Photo', key: 'geoTagged', onPress: handleGeoTaggedPhotoPick }
            ].map(({ label, key, onPress }) => (
              <TouchableOpacity key={key} style={styles.uploadBox} onPress={onPress}>
                <Ionicons
                  name={files[key] ? 'document-attach' : 'cloud-upload-outline'}
                  size={20}
                  color="#0B8B42"
                />
                <Text style={styles.uploadLabel}>{label}</Text>
                <Text style={styles.uploadStatus}>
                  {files[key] ? (key === 'geoTagged' ? `Lat: ${files[key].location.latitude.toFixed(2)}` : 'Uploaded') : 'Tap to Upload'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.nextBtn} onPress={() => { router.push('/pond_form/preview'); }}>
            <Text style={styles.nextBtnText}>PREVIEW</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0B8B42',
  },
  label: {
    fontSize: 14,
    marginVertical: 8,
    color: '#333',
    fontWeight: '600',
  },
  heading_land: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B8B42',
    marginBottom: 20,
    textAlign: 'center',
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
    marginBottom: 10,
  },
  radioOption: {
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
  uploadGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  uploadBox: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#A5D6A7',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
  },
  uploadLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    color: '#333',
  },
  uploadStatus: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
    textAlign: 'center',
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
