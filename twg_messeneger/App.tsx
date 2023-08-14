import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { loadFonts } from './styles/fonts';

const App: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false); //załaduj czcionki 

  useEffect(() => {
    const loadAppData = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadAppData();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return <AppNavigator />;
};

export default App;
