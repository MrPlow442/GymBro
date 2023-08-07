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

export default function CreateTrainingScreen() {
    const [text, setText] = useState('')
    return (
        <ThemedView style={styles.container}>
            <ThemedView>
                <ThemedText>Add new training</ThemedText>
                <ThemedTextInput 
                    onChangeText={(text) => setText(text)}
                    placeholder="Training name"
                    value={text}                
                />            
            </ThemedView>
            <ThemedView style={styles.bottom}>
                <Button title="Submit" color={Colors.primary} />
            </ThemedView>
        </ThemedView>
    )
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