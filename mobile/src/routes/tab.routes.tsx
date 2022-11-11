import { Platform } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useTheme } from "native-base"
import { PlusCircle, SoccerBall } from "phosphor-react-native"

import { New } from "../screens/New"
import { StackRoutes } from "./stack.routes"

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  const theme = useTheme()
  const size = theme.sizes[6]

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.yellow[500],
        tabBarInactiveTintColor: theme.colors.gray[300],
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          position: 'absolute',
          height: Platform.OS === 'android' ? 70 : theme.sizes[22],
          borderTopWidth: 0,
          backgroundColor: theme.colors.gray[800]
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts['medium']
        }
      }}
    >
      <Screen
        name="new"
        component={New}
        options={{
          title: "Novo bolão",
          tabBarIcon: ({ color }) => <PlusCircle size={size} color={color} />
        }}
      />

      <Screen
        name="pools"
        component={StackRoutes}
        options={{
          title: "Meus bolões",
          tabBarIcon: ({ color }) => <SoccerBall size={size} color={color} />
        }}
      />
    </Navigator>
  )
}