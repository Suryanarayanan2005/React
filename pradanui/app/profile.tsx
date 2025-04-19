import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Text,
  Card,
  Divider,
  Button,
  IconButton,
  TextInput,
} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();
  const scrollRef = useRef(null);

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleLogout = () => {
    router.replace('/');
  };

  const handleChangePassword = () => {
    const toggled = !showChangePassword;
    setShowChangePassword(toggled);

    if (!toggled) {
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setShowOldPassword(false);
      setShowNewPassword(false);
      setShowConfirmPassword(false);

      scrollRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  const handleGoBack = () => {
    router.push("/dashboard");
  };

  const handleSubmitPasswordChange = () => {
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setShowOldPassword(false);
    setShowNewPassword(false);
    setShowConfirmPassword(false);
    setShowChangePassword(false);

    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <Animatable.View animation="fadeInRight" duration={500} style={styles.container}>
      <View style={styles.headerBox}>
        <IconButton
          icon="arrow-left"
          size={22}
          onPress={handleGoBack}
          iconColor="#fff"
          style={styles.backIcon}
        />
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.scrollContainer}
        scrollEnabled={showChangePassword}
      >
        <Card style={styles.card}>
          <Card.Content style={styles.profileSection}>
            <Image
              source={require('../assets/images/akk.jpeg')}
              style={styles.avatar}
            />
            <View style={styles.textContainer}>
              <Text style={styles.name}>Akshaykumar S</Text>
              <Text style={styles.role}>Field Executive</Text>
            </View>
          </Card.Content>

          <Divider style={{ marginVertical: 12 }} />

          <View style={styles.infoSection}>
            {[
              { label: 'Email', value: 'akshaykumar059004@pradan.net' },
              { label: 'Mobile', value: '+91 9876543210' },
              { label: 'Date of Joining', value: '15 March 2023' },
              { label: 'Location', value: 'Jharkhand' },
              { label: 'Password', value: '********' },
            ].map((item, index) => (
              <View key={index} style={styles.itemBlock}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.value}>{item.value}</Text>
                <Divider style={styles.itemDivider} />
              </View>
            ))}

            <TouchableOpacity onPress={handleChangePassword}>
              <Text style={styles.changePassword}>Change Password</Text>
            </TouchableOpacity>
          </View>

          {showChangePassword && (
            <View style={styles.passwordBox}>
              <TextInput
                label="Old Password"
                value={oldPassword}
                onChangeText={setOldPassword}
                secureTextEntry={!showOldPassword}
                right={
                  <TextInput.Icon
                    icon={showOldPassword ? 'eye-off' : 'eye'}
                    onPress={() => setShowOldPassword(!showOldPassword)}
                  />
                }
                style={styles.input}
              />

              <TextInput
                label="New Password"
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry={!showNewPassword}
                right={
                  <TextInput.Icon
                    icon={showNewPassword ? 'eye-off' : 'eye'}
                    onPress={() => setShowNewPassword(!showNewPassword)}
                  />
                }
                style={styles.input}
              />

              <TextInput
                label="Confirm New Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
                right={
                  <TextInput.Icon
                    icon={showConfirmPassword ? 'eye-off' : 'eye'}
                    onPress={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  />
                }
                style={styles.input}
              />

              <Button
                mode="contained"
                onPress={handleSubmitPasswordChange}
                style={styles.submitBtn}
              >
                Submit
              </Button>
            </View>
          )}
        </Card>

        <Button
          mode="contained"
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          Logout
        </Button>
      </ScrollView>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  headerBox: {
    backgroundColor: '#1B5E20',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 16,
    elevation: 4,
  },
  backIcon: {
    marginRight: 8,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    margin: 16,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    elevation: 3,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1B5E20',
  },
  role: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
    marginTop: 2,
  },
  infoSection: {
    marginTop: 12,
  },
  itemBlock: {
    marginBottom: 14,
  },
  label: {
    fontSize: 15,
    color: '#1B5E20',
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  itemDivider: {
    marginTop: 10,
  },
  changePassword: {
    marginTop: 10,
    color: '#1B5E20',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  passwordBox: {
    marginTop: 20,
  },
  input: {
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  submitBtn: {
    backgroundColor: '#1B5E20',
    borderRadius: 8,
    marginTop: 8,
    paddingVertical: 6,
  },
  logoutButton: {
    marginHorizontal: 16,
    marginTop: 25,
    backgroundColor: '#1B5E20',
    borderRadius: 10,
    paddingVertical: 6,
  },
});
