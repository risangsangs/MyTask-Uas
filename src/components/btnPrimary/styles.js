import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: "#F0694D",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: normalize(15, "height"),
        borderRadius: 16,
    },
    textBtn: {
        fontSize: 16,
        fontWeight: '500',
        color: "#FFFFFF",
    },
});

export default styles