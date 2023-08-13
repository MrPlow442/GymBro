import { router, useLocalSearchParams } from "expo-router";
import {
    ThemedText,
    ThemedView
} from "@/components/Themed"
import CommonStyles from '@/constants/CommonStyleSheet'
import { TrainingDto } from "@/dtos/TrainingDto";
import { Ionicons } from "@expo/vector-icons";
import ExerciseItem from "@/components/ExerciseItem";
import Repositories from "@/data/database"

export default async function TrainingDetailsScreen() {
    const { trainingName } = useLocalSearchParams()

    const training: TrainingDto | null = await Repositories.trainingsRepository.getByName(trainingName as string)

    if (training === null) {
        console.log(`Training ${trainingName} does not exist!`)
        router.back()
        return
    }
    // const training = new TrainingDto(trainingName as string, "Chest - Shoulders - Biceps")
    // training.addExercise(new ExerciseDto("Chest press (cable)", 4, new ScalarOrRange(12, 15), "24kg"))
    // training.addExercise(new ExerciseDto("Chest press (device)", 3, new ScalarOrRange(10, 12), "20kg"))
    // training.addExercise(new ExerciseDto("Fly", 3, new ScalarOrRange(10, 12), "65"))
    // training.addExercise(new ExerciseDto("Shoulder press", 4, new ScalarOrRange(12, 15), "35kg"))
    // training.addExercise(new ExerciseDto("Lateral rise", 3, new ScalarOrRange(10, 12), "100 dugi neki description aaaaaaaaaaaaaAAAAAAAAAAAAAAAAAABBBBBBBBBBBCCCCCCCCCDDDDDDEEEEE"))
    // training.addExercise(new ExerciseDto("Biceps curl", 4, new ScalarOrRange(12, 15), "55kg"))


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