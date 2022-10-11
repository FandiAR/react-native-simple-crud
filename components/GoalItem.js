import { Pressable, StyleSheet, View, Text } from 'react-native'

const GoalItem = (props) => {
    const { id, onDeleteItem, text } = props;

    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: 'white' }}
                onPress={() => onDeleteItem(id)}
                style={(pressed) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    )
}
export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    pressedItem: {
        backgroundColor: '#5e0acc'
    },
    goalText: {
        padding: 8,
        color: 'white'
    }
})