import { useState } from "react";
import { 
    ThemedText, 
    ThemedTextInput,
    ThemedView
} from '@/components/Themed'
import Colors from "@/constants/Colors";
import {
    Button,
    StyleSheet
} from 'react-native'
import Repositories from "@/data/database"
import { TrainingDto } from "@/dtos/TrainingDto";

export default function CreateTrainingScreen() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    return (
        <ThemedView style={styles.container}>
            <ThemedView>
                <ThemedText>Add new training</ThemedText>
                <ThemedTextInput 
                    onChangeText={(text) => setName(text)}
                    placeholder="Training name"
                    value={name}                
                />
                <ThemedTextInput
                    onChangeText={(text) => setDescription(text)}
                    placeholder="Training description"
                    value={description}  
                />   
            </ThemedView>
            <ThemedView style={styles.bottom}>
                <Button 
                    onPress={() => saveTraining(name, description)}
                    title="Submit" 
                    color={Colors.primary} 
                />
            </ThemedView>
        </ThemedView>
    )
}

function saveTraining(name: string, description?: string) {
    const training: TrainingDto = new TrainingDto();
    training.name = name;
    training.description = description;
    Repositories.trainingsRepository.save(training);
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end'
    }
});