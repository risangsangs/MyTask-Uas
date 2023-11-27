import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    bgLogin: {
        width: '100%',
        resizeMode: 'stretch',
    },
    cardContainer: {
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: -25,
        paddingHorizontal: normalize(25, "width"),
        paddingVertical: normalize(40, "height"),
    },
    cardTitle: {
        gap: 10,
    },
    cardTitleText: {
        fontSize: 28,
        fontWeight: '700',
        color: "#151522"
    },
    cardDescText: {
        fontSize: 17,
        fontWeight: '300',
        width: '75%'
    },
    inputField: {
        marginVertical: normalize(25, "height"),
        gap: 15,
    },
    forgetContainer: {
        marginTop: normalize(20, "height"),
        justifyContent: "center",
        alignItems: "center",
    },
    forgotPassword: {
        color: "#388AF0",
        fontSize: 15,
        fontWeight: '400'
    }
});

export default styles