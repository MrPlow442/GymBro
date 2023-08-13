import { StyleSheet, Text, View } from "react-native";
import TrainingItem from "@/components/TrainingItem";
import { TrainingDto } from "@/dtos/TrainingDto";
import { Ionicons } from '@expo/vector-icons';
import { 
    ThemedView,
    ThemedText,
    ThemedButton,
} from '@/components/Themed'
import { Link, router } from "expo-router";
import CommonStyles from '@/constants/CommonStyleSheet'
import Repositories from "@/data/database"
import { useEffect, useState } from "react";

export default function TrainingsListScreen() {

    const [trainings, setTrainings] = useState<TrainingDto[]>([])

    useEffect(() => {
        Repositories.trainingsRepository
        .getAll()
        .then(setTrainings)
        .catch((err) => console.log("Error", err))
    }, [])

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