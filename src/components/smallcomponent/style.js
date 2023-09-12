import { StyleSheet } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import { colors } from "../../services";
export const styles= StyleSheet.create({
    main:{
        width:width(85),
        height:height(7),
        backgroundColor:colors.appBgColor2,
        borderRadius:totalSize(1.55),
        justifyContent:'center',
        alignSelf:'center',
        paddingLeft:width(4)
    },
    titlestyle:{
        color:colors.appTextColor1,
        fontWeight:'900',
        fontSize:totalSize(1.44),
    },
    itemstyle:{
        fontSize:totalSize(1.2)
    }
})