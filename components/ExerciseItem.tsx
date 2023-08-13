import { useState } from "react";
import { StyleSheet, useColorScheme } from 'react-native';
import { ThemedText, ThemedView } from '@/components/Themed'
import Colors from "@/constants/Colors";
import { router } from "expo-router";
import { ExerciseDto } from "@/dtos/ExerciseDto";

export default function ExerciseItem({exercise}: {exercise: ExerciseDto}) {
  const theme = useColorScheme() ?? 'light';  
  const [collapsed, setCollapsed] = useState(false)

  return (
    <ThemedView style={[
      styles.itemContainer, 
      {
        backgroundColor: styles[theme].backgroundColor,
      }
      ]}>                  
          <ThemedText style={styles.itemName}>{exercise.name}</ThemedText>
          <ThemedView style={{backgroundColor: 'transparent', flexDirection: 'column'}}>
            <ThemedView style={{backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between'}}>
              <ThemedText style={styles.itemDescription}>Series: {exercise.series}</ThemedText>
              <ThemedText style={styles.itemDescription}>Reps: {exercise.reps.from} {exercise.reps.to > 0 && ' - ' + exercise.reps.to }</ThemedText>            
            </ThemedView>                                              
            <ThemedText style={styles.itemDescription}>Note: {exercise.note}</ThemedText>    
          </ThemedView>          
    </ThemedView>
  );
}

const styles = StyleSheet.create({
    itemContainer: {
      marginTop: 5,
      padding: 5,
      borderRadius: 5,
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
  