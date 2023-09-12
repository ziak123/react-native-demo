import { StyleSheet } from "react-native";
import { width ,height,totalSize} from "react-native-dimension";
import { colors } from "../../../services";
export const styles= StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
      },
      mapContainer: {
        flex: 1,
      },
      map: {
        flex: 1,
      },
      btn:{
        width:width(90),
           backgroundColor:colors.appBgColor1,
           width:width(85),
           height:height(7),
           borderRadius:totalSize(1.5),
           alignSelf:'center'
      },
      lefticon:{
        marginHorizontal:width(2.44)
      },
      lefttoback:{
        marginHorizontal:width(2),
        bottom:height(1.33)
      }
})