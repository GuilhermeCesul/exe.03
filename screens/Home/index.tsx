import { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { ButtonMinus, ButtonPlus, ResetButton } from "../../components/Buttons";

export function Home() {

    const [placarNos, setPlacarNos] = useState(0);

    const [placarEles, setPlacarEles] = useState(0);

    const addValueNos = () => {
        setPlacarNos(placarNos + 1)
    }

    const addValueEles = () => {
        setPlacarEles(placarEles + 1)
    }

    const lessValueNos = () => {
        setPlacarNos(placarNos - 1)
    }

    const lessValueEles = () => {
        setPlacarEles(placarEles - 1)
    }

    const resetValues = () => {
        setPlacarNos(0)
        setPlacarEles(0)
    }

    return(
        <View style={styles.container} >
            <View style={styles.titleBox} >
                <Text style={styles.titleText} >
                    MARCADOR DE TRUCO
                </Text>
            </View>
            <View style={styles.placarBox} >
                <View>
                    <Text style={styles.placarTitleLeft} >
                        NÓS
                    </Text>
                    <Text style={styles.placarTitleLeft} >{placarNos}</Text>
                </View>
                <View>
                    <Text style={styles.placarTitleRight} >
                        ELES
                    </Text>
                    <Text style={styles.placarTitleRight} >{placarEles}</Text>
                </View>
            </View>
            <View style={styles.buttonBox} >
                <View style={styles.buttonSubBox} >
                    <ButtonPlus title={"+ 1"} onPressN={addValueNos} />
                    <ButtonMinus title={"- 1"} onPressN={lessValueNos} />
                </View>
                <View style={styles.buttonSubBox} >
                    <ButtonPlus title={"+ 1"} onPressN={addValueEles} />
                    <ButtonMinus title={"- 1"} onPressN={lessValueEles} />
                </View>
            </View>
            <View style={styles.footer} >
                <ResetButton title={"Zerar"} onPressN={resetValues} />
            </View>
        </View>
    )
}
