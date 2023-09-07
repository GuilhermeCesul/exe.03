import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    text: {
        color: "#FFF"
    },

    container : {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "space-between"
    },

    titleBox: {
        alignItems: "center",
        justifyContent: "center"
    },

    titleText: {
        color: "#FFF",
        fontSize: 30,
        paddingTop: 90
    },

    placarBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 50,
        paddingRight: 50
    },

    placarTitleLeft: {
        color: "#4aa5f9",
        fontSize: 50,
        justifyContent: "center"
    },

    placarTitleRight: {
        color: "#c08df3",
        fontSize: 50,
        justifyContent: "center"
    },

    buttonBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 50
    },

    buttonSubBox: {
        gap: 20
    },

    buttonPlus: {
        width: 100,
        height: 50,
        backgroundColor: "#589d52",
        color: "#FFF",
        fontSize: 30,
        fontWeight: "bold",
        borderRadius: 5,
        textAlign: "center"
    },

    buttonMinus: {
        width: 100,
        height: 50,
        backgroundColor: "#bd1010",
        color: "#FFF",
        fontSize: 30,
        fontWeight: "bold",
        borderRadius: 5,
        textAlign: "center"
    },

    footer: {
        alignItems: "center",
        paddingBottom: 20
    },

    resetButton: {
        width: 300,
        height: 50,
        borderRadius: 5,
        backgroundColor: "#de9609",
    },
    
    resetText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center"
    }
})
