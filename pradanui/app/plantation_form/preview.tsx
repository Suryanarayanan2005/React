import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function PreviewPage() {
  const renderField = (label, value) => (
    <View style={styles.item} key={label}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value || 'N/A'}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Basic Details */}
      <Text style={styles.heading_land}>PLANTATION FORM</Text>
      <View style={styles.card}>
        <Text style={styles.pageTitle}>Preview</Text>
        <Text style={styles.sectionTitle}>Basic Details</Text>

        {renderField('1. Name of Farmer', '')}
        {renderField('2. Mobile Number', '')}
        {renderField('3. Hamlet', '')}
        {renderField('4. Panchayat', '')}
        {renderField('5. Block', '')}
        {renderField('6. Identity Card Type', '')}
        {renderField('7. ID Card Number', '')}
        {renderField('8. Gender', '')}
        {renderField('9. Father / Spouse Name', '')}
        {renderField('10. Household Type', '')}

        <View style={styles.item}>
          <Text style={styles.label}>11. Household Members</Text>
          <Text style={styles.subLabel}>Adults:</Text>
          <Text style={styles.value}></Text>
          <Text style={styles.subLabel}>Children:</Text>
          <Text style={styles.value}></Text>
        </View>

        {renderField('12. Occupation(s)', '')}
        {renderField('13. Special Category', '')}
        {renderField('Disabled Members', '')}
        {renderField('14. Caste', '')}
        {renderField('15. House Ownership', '')}
        {renderField('16. House Type', '')}
        {renderField('17. Drinking Water Source', '')}
        {renderField('18. Water Potability', '')}
        {renderField('19. Domestic Water Source', '')}
        {renderField('20. Toilet Available?', '')}
        {renderField('21. Toilet Condition', '')}
        {renderField('22. Education Level of Householder', '')}

        <View style={styles.editButtonContainer}>
          <TouchableOpacity style={styles.editBtn}onPress={() => {
                                                        router.push('/plantation_form/Basic details');
                                                      }}>
            <Ionicons name="create-outline" size={20} color="#0B8B42" />
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Land Ownership & Livestock Details */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Land Ownership & Livestock Details</Text>

        {renderField('24. Well for Irrigation', '')}
        <View style={styles.item}>
          <Text style={styles.label}>25. Irrigated Lands (ha)</Text>
          <Text style={styles.subLabel}>Rainfed:</Text>
          <Text style={styles.value}></Text>
          <Text style={styles.subLabel}>Tankfed:</Text>
          <Text style={styles.value}></Text>
          <Text style={styles.subLabel}>Well irrigated:</Text>
          <Text style={styles.value}></Text>
        </View>
        {renderField('26. Patta Number', '')}
        {renderField('27. Total Area (ha)', '')}
        {renderField('28. Revenue Village', '')}
        {renderField('29. Crop Season', '')}
        {renderField('30. Livestock at Home', '')}

        <View style={styles.editButtonContainer}>
          <TouchableOpacity style={styles.editBtn}onPress={() => {
                                                        router.push('/plantation_form/lnd_own');
                                                      }}>
            <Ionicons name="create-outline" size={20} color="#0B8B42" />
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Land Development Activity */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Land Development Activity</Text>

        {renderField('31. S.F. No. of the land to be developed', '')}
        <View style={styles.item}>
          <Text style={styles.label}>31.a) Latitude and Longitude</Text>
          <Text style={styles.subLabel}>Latitude:</Text>
          <Text style={styles.value}></Text>
          <Text style={styles.subLabel}>Longitude:</Text>
          <Text style={styles.value}></Text>
        </View>
        {renderField('32. Soil Type', '')}
        {renderField('33. Land to benefit (ha)', '')}
        {renderField('36. Date of Inspection', '')}
        {renderField('38. Type of plantation proposed', '')}
        {renderField('39. Area benefited by proposed works (ha)', '')}
        {renderField('40. Any other works proposed', '')}
        {renderField('41. PRADAN Contribution', '')}
        {renderField('42. Farmer Contribution', '')}
        {renderField('43. Total Estimate Amount', '')}

        <View style={styles.editButtonContainer}>
          <TouchableOpacity style={styles.editBtn}onPress={() => {
                                                        router.push('/plantation_form/proposed_work_by_farmer');
                                                      }}>
            <Ionicons name="create-outline" size={20} color="#0B8B42" />
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bank Details */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Bank Details</Text>

        {renderField('44. Name of Account Holder', '')}
        {renderField('45. Account Number', '')}
        {renderField('46. Name of the Bank', '')}
        {renderField('47. Branch', '')}
        {renderField('48. IFSC', '')}
        {renderField('49. Farmer has agreed for the work, and his contribution', '')}

        {/* Field 50: Files submitted */}
        <View style={styles.item}>
          <Text style={styles.label}>50. Files submitted:</Text>
          {[
            'Patta',
            'ID Card',
            'FMB',
            'Photo of Farmer',
            'Bank Passbook',
            'Geo-tagged Photo',
          ].map((file, index) => (
            <View key={index} style={styles.fileRow}>
              <View style={styles.fileLeft}>
                <Ionicons name="document-text-outline" size={18} color="#2E7D32" />
                <Text style={styles.fileName}>{file}</Text>
              </View>
              <View style={styles.fileRight}>
                <Text style={styles.statusText}>Uploaded</Text>
                <Ionicons name="eye-outline" size={20} color="#388E3C" style={{ marginLeft: 10 }} />
              </View>
            </View>
          ))}
        </View>

        <View style={styles.editButtonContainer}>
          <TouchableOpacity style={styles.editBtn}onPress={() => {
                                                        router.push('/plantation_form/bank_details');
                                                      }}>
            <Ionicons name="create-outline" size={20} color="#0B8B42" />
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View><View style={styles.submitContainer}>
  <TouchableOpacity style={styles.submitBtn}onPress={() => {
                    router.push("/dashboard");
                  }}>
    <Ionicons name="checkmark-circle-outline" size={22} color="#fff" />
    <Text style={styles.submitText}>Submit</Text>
  </TouchableOpacity>
</View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F7ED',
    flex: 1,
  },
  card: {
    margin: 20,
    backgroundColor: '#E8F5E9',
    borderRadius: 16,
    padding: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0B8B42',
    marginBottom: 6,
    textAlign: 'center',
    letterSpacing: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4CAF50',
    marginBottom: 20,
    textAlign: 'left',
  },
  item: {
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#C8E6C9',
    paddingBottom: 6,
  },
  label: {
    color: '#0B8B42',
    fontSize: 15,
    fontWeight: '700',
  },
  subLabel: {
    color: '#388E3C',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
  value: {
    fontSize: 15,
    color: '#444',
    marginTop: 2, 
    fontWeight: '500',
  },
  editButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30,
  },
  heading_land: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B8B42',
    marginBottom: 10,
    marginTop:25,
    textAlign: 'center', 
  },
  editBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#DFF5E3',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#134e13',
  },
  editText: {
    marginLeft: 6,
    color: '#134e13',
    fontWeight: '600',
    fontSize: 15,
  },
  fileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C8E6C9',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
    backgroundColor: '#F1F8E9',
  },
  fileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileName: {
    marginLeft: 8,
    fontSize: 15,
    color: '#2E7D32',
    fontWeight: '600',
  },
  fileRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    color: '#4CAF50',
    fontWeight: '600',
    fontSize: 14,
  },
  submitContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 40,
    alignItems: 'center',
  },
  submitBtn: {
    flexDirection: 'row',
    backgroundColor: '#134e13',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
    letterSpacing: 0.5,
  },
  
  
});