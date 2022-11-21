import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Groups } from '../screens/Groups'
import { NewGroup } from '../screens/NewGroup'
import { useTheme } from 'native-base'
import { Platform } from 'react-native'

import { PlusCircle, SoccerBall } from 'phosphor-react-native'

const { Navigator, Screen} = createBottomTabNavigator()

export function AppRoutes(){

    const { colors } = useTheme()
    

    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: 'beside-icon',
                tabBarActiveTintColor: colors.yellow[500],
                tabBarInactiveTintColor: colors.gray[300],
                tabBarStyle:{
                    position: 'absolute',
                    height: 87,
                    borderTopWidth: 0,
                    backgroundColor: colors.gray[800],
                },
                tabBarItemStyle: {
                    position: 'relative',
                    top: Platform.OS === 'android' ? -10 : 0
                }
            }}
        >
            <Screen
                name="new"
                component={NewGroup}
                options={{
                    tabBarIcon: ({ color }) => <PlusCircle color={color} size={24}/>,
                    tabBarLabel: 'New Group'
                }}
            />
            <Screen
                name="Groups"
                component={Groups}
                options={{
                    tabBarIcon: ({ color }) => <SoccerBall color={color} size={24}/>,
                    tabBarLabel: 'My Groups'
                }}
            />
        </Navigator>
    )
}