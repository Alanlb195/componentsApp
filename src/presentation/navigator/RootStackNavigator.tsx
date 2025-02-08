import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { Animation101Screen } from '../screens/animations/Animation101Screen';
import { Animation102Screen } from '../screens/animations/Animation102Screen';
import { SwitchScreen } from '../screens/switches/SwitchScreen';
import { AlertScreen } from '../screens/alerts/AlertScreen';
import { TextInputScreen } from '../screens/inputs/TextInputScreen';
import { CustomSectionListScreen, ModalScreen, PullToRefreshScreen } from '../screens/ui';
import { InfiniteScrollScreen } from '../screens/ui/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/ui/SlidesScreen';
import { ChangeThemeScreen } from '../screens/theme/ChangeThemeScreen';

// Routes - Definition
// export type RootStackParamList = {
//     Home: { userId: string };
//     Animation101Screen: {  };
//     Animation102Screen: { };
//     SwitchScreen: { };
//     AlertScreen: { };
//     TextInputScreen: { };
//     PullToRefreshScreen: { };
//     CustomSectionListScreen: { };
//     ModalScreen: { };
// };
// It can be used to specify params
// const RootStack = createStackNavigator<RootStackParamList>();

const RootStack = createStackNavigator();

export const RootStackNavigator = () => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
      animation: 'slide_from_right', // 'fade' || 'slide_from_right' || 'slide_from_left'
    }}
  >
    <RootStack.Screen name="Home" component={HomeScreen} />
    <RootStack.Screen name="Animation101Screen" component={Animation101Screen} />
    <RootStack.Screen name="Animation102Screen" component={Animation102Screen} />
    <RootStack.Screen name="SwitchScreen" component={SwitchScreen} />
    <RootStack.Screen name="AlertScreen" component={AlertScreen} />
    <RootStack.Screen name="TextInputScreen" component={TextInputScreen} />
    <RootStack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
    <RootStack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
    <RootStack.Screen name="ModalScreen" component={ModalScreen} />
    <RootStack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
    <RootStack.Screen name="SlidesScreen" component={SlidesScreen} />
    <RootStack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
  </RootStack.Navigator>
)