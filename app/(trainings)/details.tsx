import { useLocalSearchParams } from "expo-router";
import {
    ThemedText,
    ThemedView
} from "@/components/Themed"
import CommonStyles from '@/constants/CommonStyleSheet'
import { Training } from "@/entities/Training";
import { Exercise } from "@/entities/Exercise";
import { ScalarOrRange } from "@/entities/ScalarOrRange";
import { Ionicons } from "@expo/vector-icons";
import ExerciseItem from "@/components/ExerciseItem";

export default function TrainingDetailsScreen() {
    const { trainingName } = useLocalSearchParams()

    const training = new Training(trainingName as string, "Chest - Shoulders - Biceps")
    training.addExercise(new Exercise("Chest press (cable)", 4, new ScalarOrRange(12, 15), "24kg"))
    training.addExercise(new Exercise("Chest press (device)", 3, new ScalarOrRange(10, 12), "20kg"))
    training.addExercise(new Exercise("Fly", 3, new ScalarOrRange(10, 12), "65"))
    training.addExercise(new Exercise("Shoulder press", 4, new ScalarOrRange(12, 15), "35kg"))
    training.addExercise(new Exercise("Lateral rise", 3, new ScalarOrRange(10, 12), "100 dugi neki description aaaaaaaaaaaaaAAAAAAAAAAAAAAAAAABBBBBBBBBBBCCCCCCCCCDDDDDDEEEEE"))
    training.addExercise(new Exercise("Biceps curl", 4, new ScalarOrRange(12, 15), "55kg"))

    return (
        <ThemedView style={CommonStyles.flexContainer}>
            <ThemedView style={CommonStyles.cardTitleContainer}>
                <Ionicons style={[CommonStyles.cardTitle, CommonStyles.cardTitleIcon]} name="barbell" />
                <ThemedText style={CommonStyles.cardTitle}>{training.name}</ThemedText>                
            </ThemedView>
            <ThemedView style={CommonStyles.cardTextContainer}>
                <ThemedText style={CommonStyles.cardText}>{training.description}</ThemedText>
            </ThemedView>
            <ThemedView>
                {
                    training.exercises.map((exercise) => {
                        return <ExerciseItem exercise={exercise} key={exercise.name} />
                    })
                }
            </ThemedView>      
        </ThemedView>
    );
}