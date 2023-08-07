import { Training } from "@/entities/Training";
import { StyleSheet, View, useColorScheme, Pressable } from 'react-native';
import { ThemedText } from '@/components/Themed'
import Colors from "@/constants/Colors";
import { router } from "expo-router";

export default function TrainingItem({training}: {training: Training}) {
  const theme = useColorScheme() ?? 'light';  
  return (
    <Pressable onPress={() => router.push({ pathname: '/(trainings)/details', params: { trainingName: training.name }})}>
      <View style={[styles.itemContainer, {backgroundColor: styles[theme].backgroundColor}]}>
          <ThemedText style={styles.itemName}>{training.name}</ThemedText>
          <ThemedText style={styles.itemDescription}>{training.description}</ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    itemContainer: {
      marginTop: 5,
      padding: 5,
      borderRadius: 5      
    },
    itemName: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    itemDescription: {
      fontSize: 12     
    },
    light: {
      backgroundColor: Colors.light.primary
    },
    dark: {
      backgroundColor: '#303030'
    }
  });
  