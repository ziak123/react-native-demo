import { useState } from "react"
import { useEffect } from "react"
import { Text, View } from "react-native"
import { useSelector } from "react-redux"

export const Header=()=>{
    const [cartItem,setCartItem]=useState(0);
    const cartData=useSelector((state)=>state.reducer);
    //  console.log(cartData,"arrayType")
    useEffect(() => {
            setCartItem(cartData.length);  
      }, [cartData]);            

    return(
        <View style={{height:60,backgroundColor:'lightgray',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:30}}>{cartItem}</Text>
            </View>
    )
}