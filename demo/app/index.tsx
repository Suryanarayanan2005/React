import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-paper';
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';

const FormSubmissionsScreen = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState('desc');
  const [formTypeOpen, setFormTypeOpen] = useState(false);
  const [formTypeValue, setFormTypeValue] = useState(null);
  const [formTypeItems, setFormTypeItems] = useState([
    { label: 'Basic Details', value: 'basic' },
    { label: 'Land Details', value: 'land' },
    { label: 'Bank Details', value: 'bank' },
  ]);
  const [panchayatOpen, setPanchayatOpen] = useState(false);
  const [panchayatValue, setPanchayatValue] = useState(null);
  const [panchayatItems, setPanchayatItems] = useState([
    { label: 'Panchayat A', value: 'a' },
    { label: 'Panchayat B', value: 'b' },
  ]);
  const [blockOpen, setBlockOpen] = useState(false);
  const [blockValue, setBlockValue] = useState(null);
  const [blockItems, setBlockItems] = useState([
    { label: 'Block X', value: 'x' },
    { label: 'Block Y', value: 'y' },
  ]);
  const [hamletOpen, setHamletOpen] = useState(false);
  const [hamletValue, setHamletValue] = useState(null);
  const [hamletItems, setHamletItems] = useState([
    { label: 'Hamlet 1', value: '1' },
    { label: 'Hamlet 2', value: '2' },
  ]);
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [genderItems, setGenderItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Transgender', value: 'transgender' },
  ]);
  const [statusOpen, setStatusOpen] = useState(false);
  const [statusValue, setStatusValue] = useState(null);
  const [statusItems, setStatusItems] = useState([
    { label: 'Submitted', value: 'submitted' },
    { label: 'Draft', value: 'draft' },
  ]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const handleResetFilters = () => {
    setFormTypeValue(null);
    setPanchayatValue(null);
    setBlockValue(null);
    setHamletValue(null);
    setGenderValue(null);
    setStatusValue(null);
    setStartDate(new Date());
    setEndDate(new Date());
  };

  const mockData = []; // Replace with actual filtered data

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
          <Ionicons name="arrow-back" size={24} color="#1B5E20" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Form Submissions</Text>
        <TouchableOpacity onPress={() => setFilterVisible(!filterVisible)} style={styles.filterIcon}>
          <MaterialIcons name="filter-list" size={24} color="#1B5E20" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome5 name="search" size={16} color="#1B5E20" style={styles.searchIcon} />
        <TextInput
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
          placeholderTextColor="#aaa"
        />
      </View>
      <Button mode="contained" onPress={handleSearch} style={styles.searchButton}>
        Search
      </Button>

      {/* Filter Section */}
      {filterVisible && (
        <View style={styles.filterSection}>
          <DropDownPicker
            open={formTypeOpen}
            value={formTypeValue}
            items={formTypeItems}
            setOpen={setFormTypeOpen}
            setValue={setFormTypeValue}
            setItems={setFormTypeItems}
            placeholder="Form Type"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownBox}
          />
          <DropDownPicker
            open={panchayatOpen}
            value={panchayatValue}
            items={panchayatItems}
            setOpen={setPanchayatOpen}
            setValue={setPanchayatValue}
            setItems={setPanchayatItems}
            placeholder="Panchayat"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownBox}
          />
          <DropDownPicker
            open={blockOpen}
            value={blockValue}
            items={blockItems}
            setOpen={setBlockOpen}
            setValue={setBlockValue}
            setItems={setBlockItems}
            placeholder="Block"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownBox}
          />
          <DropDownPicker
            open={hamletOpen}
            value={hamletValue}
            items={hamletItems}
            setOpen={setHamletOpen}
            setValue={setHamletValue}
            setItems={setHamletItems}
            placeholder="Hamlet"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownBox}
          />
          <DropDownPicker
            open={genderOpen}
            value={genderValue}
            items={genderItems}
            setOpen={setGenderOpen}
            setValue={setGenderValue}
            setItems={setGenderItems}
            placeholder="Gender"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownBox}
          />
          <DropDownPicker
            open={statusOpen}
            value={statusValue}
            items={statusItems}
            setOpen={setStatusOpen}
            setValue={setStatusValue}
            setItems={setStatusItems}
            placeholder="Status"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownBox}
          />

          {/* Date Range */}
          <View style={styles.dateContainer}>
            <TouchableOpacity onPress={() => setShowStartPicker(true)} style={styles.dateButton}>
              <Text style={styles.dateText}>Start: {startDate.toDateString()}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowEndPicker(true)} style={styles.dateButton}>
              <Text style={styles.dateText}>End: {endDate.toDateString()}</Text>
            </TouchableOpacity>
          </View>
          {showStartPicker && (
            <DateTimePicker
              value={startDate}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowStartPicker(false);
                if (selectedDate) setStartDate(selectedDate);
              }}
            />
          )}
          {showEndPicker && (
            <DateTimePicker
              value={endDate}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowEndPicker(false);
                if (selectedDate) setEndDate(selectedDate);
              }}
            />
          )}

          <Button mode="outlined" onPress={handleResetFilters} style={styles.resetButton}>
            Reset Filters
          </Button>
        </View>
      )}

      {/* Result Count / Message */}
      <Text style={styles.resultCount}>
        {mockData.length > 0 ? `${mockData.length} forms found` : 'No forms found'}
      </Text>
    </ScrollView>
  );
};

export default FormSubmissionsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  backIcon: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1B5E20',
    flex: 1,
    textAlign: 'center',
  },
  filterIcon: {
    padding: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1B5E20',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    color: '#000',
  },
  searchButton: {
    marginBottom: 16,
    backgroundColor: '#1B5E20',
  },
  filterSection: {
    marginBottom: 20,
    gap: 10,
  },
  dropdown: {
    marginBottom: 8,
    borderColor: '#1B5E20',
  },
  dropdownBox: {
    borderColor: '#1B5E20',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  dateButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#1B5E20',
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
  },
  dateText: {
    color: '#1B5E20',
    textAlign: 'center',
  },
  resetButton: {
    borderColor: '#1B5E20',
    marginTop: 10,
  },
  resultCount: {
    marginTop: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});          