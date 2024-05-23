import { Stack } from 'expo-router'

export default function StackLayout(){
  return(
      <Stack>
          <Stack.Screen name='index' options={{ headerShown: false}}/>
          <Stack.Screen name='entrar' options={{headerTitle: 'entrar', headerStyle: {backgroundColor: 'red'} }}/>
          <Stack.Screen name='cadastrar' options={{headerTitle: 'cadastrar', headerStyle: {backgroundColor: 'red'}}}/>
      </Stack>
  )
}
