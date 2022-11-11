import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Find } from "../screens/Find"
import { Pools } from "../screens/Pools"
import { Details } from "../screens/Details"

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName="pools.index"
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom"
      }}
    >
      <Screen name="pools_index" component={Pools} />

      <Screen name="pools_find" component={Find} />

      <Screen name="details" component={Details} />
    </Navigator>
  )
}