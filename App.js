// import React, { Component } from 'react';
// import { View, Text, SafeAreaView } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Navigation from './src/navigation'
// export default function App() {
//   return (
//     <SafeAreaProvider style={{ flex: 1 }}>
//       <Navigation />
//     </SafeAreaProvider>
//   )
// }

/// useEffect/////////////////////

// import { View, Text, Button } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import Wrapper from './src/components/wrapper'
// import Spacer from './src/components/spacer';
// const counter= 0;
// const App = () => {
//   const [value,setValue] = useState(0)
//   const [value1,setValue1] = useState(0);
//   useEffect(()=>{
//     console.log("ttyt")//calling again and again
//   })
//   useEffect(()=>{
//     console.log("ttyt1")//calling on screen load only
//   },[])
//   useEffect(()=>{
//     console.log("ttyt2")//depands on change in value
//   },[value1])
//   return (
//     <Wrapper alignItemsCenter justifyContentCenter>
//       <Spacer isDoubleBase/>
//        <Text>
//         {value}
//       </Text>
//       <Button title='bttn' onPress={()=>{setValue(value+1)}}/>
//       <Text>
//         counter
//       </Text>
//       <Spacer isDoubleBase/>
//       <Spacer isDoubleBase/>
//       <Text>
//         {value1}
//       </Text>
//       <Button title='bttn' onPress={()=>{setValue1(value1+1)}}/>
//       <Text>
//         counter1
//       </Text>
//     </Wrapper >

//   )
// }

// export default App

//useRef/////
import { View, Text, TextInput } from 'react-native'
import React, { useRef } from 'react'

import Spacer from './src/components/spacer'
import Wrapper from './src/components/wrapper'

const App = () => {
  const ref= useRef()
  console.log(ref)
  return (
    <Wrapper >
      <Spacer isDoubleBase/>
     <TextInput ref={ref}  placeholder={"enter name"}/>
     <Text onPress={()=>{
      ref.current.focus() 
     }}>focus</Text>
    </Wrapper>
  )
}

export default App