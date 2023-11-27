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
        marginTop: normalize(15, "height"),
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "stretch",
        borderRadius: 16
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: "500",
        marginBottom: 10,
    },
    listContainer: {
        backgroundColor: "#F6F5FA",
        marginVertical: normalize(7.5, "height"),
        borderRadius: 16,
        height: 72,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        paddingVertical: 16,
    },
    listText: {
        gap: 5,
    },
    listName: {
        fontSize: 16,
        fontWeight: "600"
    },
    listKeterangan: {
        fontSize: 14,
        fontWeight: "400"
    },
    listBtnContainer: {
        height: 42,
        width: 42,
        backgroundColor: "#000000",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    listBtnContainerDel: {
        height: 42,
        width: 42,
        backgroundColor: "red",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    dropdown: {
        height: 50,
        borderColor: "#000000",
        borderBottomWidth: 1
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      dropdownContainer: {
        marginVertical: normalize(15, "height")
      }
});

export default styles