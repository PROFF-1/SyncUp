import { StyleSheet, Text, View, TextInput, Animated, TouchableOpacity, Alert } from 'react-native';
import React, { useRef, useState } from 'react';
import FullLogoSVGComponent from '../Components/Svgs/FullLogo';
import Buttons from '../Components/Buttons';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase authentication functions
import { auth } from '../firebaseConfig';



export default function AuthenticationScreen({ navigation }) {
  const [isLogin, setIsLogin] = useState(true); // Track whether it's login or signup
  const slideAnim = useRef(new Animated.Value(0)).current; // Animation value for sliding
  const [courses, setCourses] = useState([]); // State to store the list of courses
  const [courseInput, setCourseInput] = useState(''); // State to store the current input

  const [email, setEmail] = useState(''); // State to store email input
  const [password, setPassword] = useState(''); // State to store password input
  const [name, setName] = useState(''); // State to store name input

 

  // Function to toggle between login and signup
  const toggleForm = () => {
    Animated.timing(slideAnim, {
      toValue: isLogin ? -400 : 0, // Slide left for login, reset for signup
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsLogin(!isLogin); // Toggle the form state
  };

  // Function to handle adding a course
  const handleAddCourse = () => {
    if (courseInput.trim()) {
      setCourses([...courses, courseInput.trim()]); // Add the course to the list
      setCourseInput(''); // Clear the input field
    }
  };

  // Function to handle deleting a course
  const handleDeleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index); // Remove the selected course
    setCourses(updatedCourses); // Update the courses state
  };

  const handleSignUp = async () => {
    // Input validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
  
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter your name.');
      return;
    }
    if (!email.trim() || !emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }
    if (!password.trim() || password.length < 6 || password.includes(' ')) {
      Alert.alert('Error', 'Password must be at least 6 characters long and should not contain spaces.');
      return;
    }
  
    try {
      // Attempt to create a new user
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user; // Get the signed-in user
      console.log('User registered successfully:', user.email);
  
      // Display success message
      Alert.alert('Success', `Welcome, ${name}! Your account has been created.`);
  
      // Navigate to the next screen (e.g., Home screen)
      navigation.navigate('AppTabs'); // Replace 'HomeScreen' with your target screen
    } catch (error) {
      // Handle specific Firebase errors
      switch (error.code) {
        case 'auth/email-already-in-use':
          Alert.alert('Error', 'This email address is already in use.');
          break;
        case 'auth/invalid-email':
          Alert.alert('Error', 'The email address is not valid.');
          break;
        case 'auth/weak-password':
          Alert.alert('Error', 'The password is too weak.');
          break;
        default:
          Alert.alert('Error', error.message); // Fallback for other errors
          console.error('Signup error:', error.message);
          break;
      }
    }
  };

  const handleLoginin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
  
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
      // Navigate to the next screen (e.g., Home screen)
      navigation.navigate('AppTabs'); // Replace 'HomeScreen' with your target screen
    } catch (error) {
      // Handle specific Firebase errors
      switch (error.code) {
        case 'auth/invalid-email':
          Alert.alert('Error', 'The email address is not valid.');
          break;
        case 'auth/user-disabled':
          Alert.alert('Error', 'This user account has been disabled.');
          break;
        case 'auth/user-not-found':
          Alert.alert('Error', 'No user found with this email.');
          break;
        case 'auth/wrong-password':
          Alert.alert('Error', 'Incorrect password. Please try again.');
          break;
        default:
          Alert.alert('Error', error.message); // Fallback for other errors
          break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <FullLogoSVGComponent style={styles.logo} />

      {/* Animated View for Login Form */}
      <Animated.View
        style={[
          styles.formContainer,
          { transform: [{ translateX: slideAnim }] }, // Slide animation
        ]}
      >
        <TextInput placeholder="Email" style={styles.textInput}
          value={email}
          onChangeText={text=>setEmail(text)} // Update the email state
        />
        <TextInput placeholder="Password" style={styles.textInput} secureTextEntry
          value={password}
          onChangeText={text=>setPassword(text)} // Update the password state
        />
        <Buttons
          title="Login"
          onPress={handleLoginin}
          customStyles={styles.button}
        />
        <Text style={styles.prompt}>
          Don't have an account?{' '}
          <Text style={styles.link} onPress={toggleForm}>
            SignUp
          </Text>
        </Text>
      </Animated.View>

      {/* Animated View for Signup Form */}
      <Animated.View
        style={[
          styles.formContainer,
          { transform: [{ translateX: Animated.add(slideAnim, 400) }] }, // Slide animation
        ]}
      >
        <TextInput placeholder="Name" style={styles.textInput}
        value={name}
        onChangeText={text=>setName(text)}
        />
        <TextInput placeholder="Email" style={styles.textInput}
        value={email}
        onChangeText={text=>setEmail(text)}
        />
        <TextInput placeholder="Password" style={styles.textInput} secureTextEntry
        value={password}
        onChangeText={text=>setPassword(text)}
        />

        <View style={styles.coursesInputContainer}>
          {/* Render entered courses as text cards inside the input field */}
          <View style={styles.coursesInput}>
            {courses.map((course, index) => (
              <View key={index} style={styles.courseCard}>
                <Text style={styles.courseText}>{course}</Text>
                <TouchableOpacity onPress={() => handleDeleteCourse(index)}>
                  <Text style={styles.deleteButton}>X</Text>
                </TouchableOpacity>
              </View>
            ))}
            <TextInput
              placeholder="Enter a course"
              style={styles.textInputInline}
              value={courseInput}
              onChangeText={setCourseInput} // Update the input state
              onSubmitEditing={handleAddCourse} // Add the course when the return key is pressed
              returnKeyType="done" // Set the return key type
            />
          </View>
        </View>
        <Buttons
          title="SignUp"
          onPress={handleSignUp} // Call the signup function
          customStyles={styles.button}
        />
        <Text style={styles.prompt}>
          Already have an account?{' '}
          <Text style={styles.link} onPress={toggleForm}>
            Login
          </Text>
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    position: 'absolute',
    top: 40,
    left: 40,
    width: 200,
    height: 200,
  },
  formContainer: {
    position: 'absolute',
    top: 270,
    left: 0,
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    height: 54,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    paddingLeft: 10,
    marginBottom: 20,
  },
  textInputInline: {
    flex: 1,
    height: 54,
    borderWidth: 0,
    paddingLeft: 10,
  },
  coursesInputContainer: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#f5f5f5',
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  coursesInput: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    flex: 1,
  },
  courseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  courseText: {
    fontSize: 14,
    color: '#312F6F',
    marginRight: 5,
  },
  deleteButton: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    width: '90%',
  },
  prompt: {
    marginTop: 20,
    textAlign: 'center',
  },
  link: {
    color: '#312F6F',
    fontWeight: 'bold',
  },
});