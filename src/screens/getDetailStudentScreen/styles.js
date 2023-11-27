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
    contentContainer: {
        marginTop: normalize(15, "height")
    },
    contentSub: {
        gap: 5,
        marginVertical: 5
    },
    textTitle: {
        fontSize: 16,
        fontWeight: "500"
    },
    valueContainer: {
        borderWidth: 1,
        borderRadius: 16,
        paddingLeft: normalize(15, "width"),
        paddingVertical: normalize(15, "height"),
    },
    value: {
        fontSize: 14,
        fontWeight: "400"
    },
    imageContainer: {
        marginTop: normalize(15, "height"),
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "stretch",
        borderRadius: 16
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 10,
    },
});

export default styles