import Spacer from "../spacer"
import Text from "../text"
import Wrapper from "../wrapper"
import { styles } from "./style"

export const AreaComponent= ({title,item,item1})=>{
    return(
        <Wrapper style={styles.main} >
         <Text style={styles.titlestyle}>{title}</Text>
         <Spacer isTiny/>
         <Wrapper flexDirectionRow>
            <Text style={styles.itemstyle}>
                {item}
            </Text>
            <Spacer isBasic horizontal/>
            <Text style={styles.itemstyle}>
                {item1}
            </Text>
         </Wrapper>
        </Wrapper>
    )
}