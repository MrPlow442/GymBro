import { StyleSheet } from 'react-native'
import Colors from './Colors'

const styles = StyleSheet.create({  
    flexContainer: {
        flex: 1
    },
    flexBottom: {        
        flex: 1,
        justifyContent: 'flex-end'    
    },
    cardTitleContainer: {
        flexDirection: "row"
    },
    cardTitle: {
        fontSize: 28
    },
    cardTitleIcon: {
        marginTop: 4,
        paddingHorizontal: 5,
        color: Colors.primary
    },
    cardTextContainer: {
        flexDirection: "column"
    },
    cardText: {
        fontSize: 16
    }    
})

export default styles