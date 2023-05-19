import { StyleSheet, View, Text, Pressable } from "react-native"

export default function GoalItem({ itemData, deleteGoal }) {
    return (
        <View  style={styles.goal} key={itemData.item.text + itemData.item.id}>
            <Pressable android_ripple={{ color: '#210644' }} onPress={() => deleteGoal(itemData.item.id)}>
                <Text style={{ color: 'white', padding: 8 }}>{itemData.item.text}</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    goal: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
});