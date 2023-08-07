import { StyleSheet, Text, View } from "react-native";
import TrainingItem from "@/components/TrainingItem";
import { Training } from "@/entities/Training";
import { Ionicons } from '@expo/vector-icons';
import Colors from "@/constants/Colors";
import { 
    ThemedView,
    ThemedText,
    ThemedButton,
} from '@/components/Themed'
import { Link, router } from "expo-router";
import CommonStyles from '@/constants/CommonStyleSheet'

export default function TrainingsListScreen() {
    const trainings: Training[] = [
        new Training("Training 1", "Chest - Shoulders - Biceps"),
        new Training("Training 2", "Legs - Abs"),
        new Training("Training 3", "Back - Triceps")
    ]

    return (
        <ThemedView style={CommonStyles.flexContainer}>
            <ThemedView style={CommonStyles.cardTitleContainer}>
                <Ionicons style={[CommonStyles.cardTitle, CommonStyles.cardTitleIcon]} name="barbell" />
                <ThemedText style={CommonStyles.cardTitle}>Trainings</ThemedText>                
            </ThemedView>
            <ThemedView style={CommonStyles.cardTextContainer}>
                <ThemedText style={CommonStyles.cardText}>Select todays training or create a new one by pressing the Add Training button below</ThemedText>
            </ThemedView>
            <ThemedView>
                {
                    trainings.map((training) => {
                        return <TrainingItem training={training} key={training.name} />
                    })
                }
            </ThemedView>
            <ThemedView style={CommonStyles.flexBottom}>
                <ThemedButton onPress={() => router.push('/(trainings)/create')}>
                    <Text>Add Training</Text>
                </ThemedButton>
            </ThemedView>            
        </ThemedView>
    )
}

const styles = StyleSheet.create({
});