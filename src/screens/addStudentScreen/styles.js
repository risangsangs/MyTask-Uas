import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: normalize(50, "height"),
        paddingHorizontal: normalize(30, "width"),
        backgroundColor: "#ffffff",
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    headerText: {
        fontSize: 16,
        fontWeight: "500",
    },
    imageContainer: {
        marginTop: normalize(25, "height"),
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "stretch",
        borderRadius: 16
    },
    textInputContainer: {
        marginVertical: normalize(25, "height"),
        gap: 15
    },
    btnSubmit: {
        marginBottom: normalize(15, "height"),
    }
});

export default styles