import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'

const GoalInput = (props) => {
    const { onCancel, visible, onAddGoal } = props;
    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }
    const addGoalHandler = () => {
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            color='#5e0acc'
                            onPress={addGoalHandler}
                            title='Add goal'
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            color='#f31282'
                            title='Cancel'
                            onPress={onCancel}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        height: 100,
        width: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        borderRadius: 6,
        backgroundColor: '#e4d0ff',
        width: '100%',
        padding: 8,
        color: '#120438',
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
})