import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './src/screens/loginScreen';
import HomeScreen from './src/screens/homeScreen';
import ListStudentScreen from './src/screens/listStudentScreen';
import AddStudentScreen from './src/screens/addStudentScreen';
import GetDetailStudent from './src/screens/getDetailStudentScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListStudentScreen" component={ListStudentScreen} />
        <Stack.Screen name="AddStudentScreen" component={AddStudentScreen} />
        <Stack.Screen name="GetDetailStudent" component={GetDetailStudent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
