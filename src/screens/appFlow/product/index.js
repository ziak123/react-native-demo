import { View, Text, Image, Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import { AddToCart, RemoveFromCart } from '../../../components/redux/action'
import { useDispatch, useSelector } from 'react-redux'

const Product = (props) => {
    const [isAdded,setIsAdded]= useState(false)
    const item=props.item
    const despatch = useDispatch();
    const cartItems = useSelector((state)=>state.reducer)
const dispatch=useDispatch();

const handleRemoveFromCart=(item)=>{
dispatch(RemoveFromCart(item.name))
}
    const handleAddToCart=(item)=>{
dispatch(AddToCart(item));
    }
    useEffect(()=>{
    let result= cartItems.filter((element)=>{
        return element.name=== item.name
    });
    if(result.length){
        setIsAdded(true)
    }else{
        setIsAdded(false)
    }
    },[cartItems])
    return (
                    <View>
                         <Image style={{height:'30%',width:"50%"}} source={item.Image} />
                         <Button title='User List' onPress={()=>navigation.navigate(routes.userlist)}/>
                        <Text>
                            {item.name}
                        </Text>
                        <Text>
                            {item.color}
                        </Text>
                        <Text>
                            {item.price}
                        </Text>
                        { isAdded?
                        <Button title='remove to cart' onPress={()=>handleRemoveFromCart(item)}/>:
                        <Button title='add to card' onPress={()=>handleAddToCart(item)}/>
}
                    </View>
                    )

}

export default Product