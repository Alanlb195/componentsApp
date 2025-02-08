import 'react-native-gesture-handler';
import { RootStackNavigator } from './presentation/navigator/RootStackNavigator';
import { ThemeProvider } from './presentation/context/ThemeContext';

export const App = () => {
  return (
    <ThemeProvider>
      <RootStackNavigator />
    </ThemeProvider>
  )
}
