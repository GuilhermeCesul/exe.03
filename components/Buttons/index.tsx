import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

type Props = {
    title: String
    onPressN: (text: any) => void
}

export function ButtonPlus(props : Props) {

    return(
        <View style={style.buttonPlus} >
            <TouchableOpacity onPress={props.onPressN} >
                <Text style={style.buttonText} >{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export function ButtonMinus(props : Props) {

    return(
        <View style={style.buttonMinus} >
            <TouchableOpacity onPress={props.onPressN} >
                <Text style={style.buttonText} >{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export function ResetButton(props : Props) {

    return(
        <View style={style.resetButton} >
            <TouchableOpacity onPress={props.onPressN} >
                <Text style={style.buttonText} >{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}
