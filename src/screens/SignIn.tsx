
import { Center, Text, Icon} from 'native-base'
import { Fontisto } from '@expo/vector-icons'

import Logo from '../assets/logo.svg'
import { Button } from '../components/Button'


export function SignIn() {
    return (
        <Center flex={1} bgColor="gray.900" p={7}>
           <Logo width={212} height={40}/>

           <Button 
            title="SIGN IN WITH GOOGLE" 
            type='SECONDARY'
            leftIcon={<Icon as={Fontisto} name="google" color="white" size="md"/>}
            mt={12}
           />

           <Text color="white" textAlign="center" mt={4}>
             We don't use any information besides your {'\n'} email to create your account
           </Text>
        </Center>
    )
}
