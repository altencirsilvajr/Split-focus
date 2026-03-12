import { Pressable, Text, View } from 'react-native';

import { CATEGORIES } from '../data/videos';
import { Category } from '../types/video';
import { styles } from '../styles/appStyles';

type HomeScreenProps = {
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
};

export function HomeScreen({ selectedCategory, onSelectCategory }: HomeScreenProps) {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Brainrot Feed</Text>
        <Text style={styles.subtitle}>Compatível com tela dividida</Text>
      </View>

      <View style={styles.chipsRow}>
        {CATEGORIES.map((category) => {
          const active = category === selectedCategory;
          return (
            <Pressable
              key={category}
              style={[styles.chip, active && styles.chipActive]}
              onPress={() => onSelectCategory(category)}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>{category}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
