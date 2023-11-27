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
        gap: 5,
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
    contentContainer: {
        marginTop: normalize(25, "height"),
        gap: 15
    },
    itemsCard: {
        flexDirection: "row",
        alignItems: "center",
        gap: 25,
        backgroundColor: "#F0694D",
        paddingVertical: 16,
        paddingLeft: 15,
        borderRadius: 16
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: "500",
        marginBottom: 10,
    },
    itemsTitle: {
        fontSize: 15,
        color: "#FFFFFF",
        fontWeight: "500"
    },
    iconContainer: {
        padding: 5,
        backgroundColor: "#FFFFFF",
        borderRadius: 8
    }
});

export default styles