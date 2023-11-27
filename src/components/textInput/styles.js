import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
    inputContainer: {
        gap: 10,
    },
    inputTitle: {
        fontSize: 15,
        fontWeight: '700'
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#E4E4E4",
        borderRadius: 8,
        paddingHorizontal: normalize(20, "width"),
        paddingVertical: normalize(10, "height"),
    }
});

export default styles