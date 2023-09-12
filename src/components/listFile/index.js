import { FlatList } from "react-native"
import { AreaComponent } from "../smallcomponent"
import Spacer from "../spacer"

export const AreaCards= ({data})=>{
    return(
        <FlatList
        data={data}
        ItemSeparatorComponent={<Spacer isBasic/>}
        horizontal={false}
        renderItem={({ item }) => (
         <AreaComponent  title={item?.title} item={item?.item} item1={item?.item1}/>
        )}
      />
    )
}