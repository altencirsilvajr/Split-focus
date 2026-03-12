import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { FeedScreen } from './screens/FeedScreen';
import { HomeScreen } from './screens/HomeScreen';
import { Category } from './types/video';
import { styles } from './styles/appStyles';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'feed'>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category>('Minecraft');

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.safe}
        edges={currentScreen === 'home' ? ['top', 'left', 'right'] : ['left', 'right']}
      >
        <StatusBar style="light" />
        {currentScreen === 'home' ? (
          <HomeScreen
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setCurrentScreen('feed');
            }}
          />
        ) : (
          <FeedScreen category={selectedCategory} onBack={() => setCurrentScreen('home')} />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
