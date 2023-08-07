import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme, Text, View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/Themed'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...Ionicons.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{        
          headerTitle: props =>
          <View style={styles.titleContainer}>
            <ThemedText style={styles.headerTitle}>Gym</ThemedText>
            <ThemedText style={[styles.headerTitle, {color: Colors.primary}]}>Bro</ThemedText>
          </View>          
        }}>
        <Stack.Screen 
          name='index'        
        />
        <Stack.Screen
          name='(trainings)/create'
        />
        <Stack.Screen
          name='(trainings)/details'
        />
        {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
      </Stack>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row'
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 30
  }
});