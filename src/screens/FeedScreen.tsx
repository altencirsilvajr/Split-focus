import { useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

import { VideoCard } from '../components/VideoCard';
import { VIDEOS } from '../data/videos';
import { Category } from '../types/video';
import { styles } from '../styles/appStyles';

type FeedScreenProps = {
  category: Category;
  onBack: () => void;
};

export function FeedScreen({ category, onBack }: FeedScreenProps) {
  const [feedSize, setFeedSize] = useState({ width: 0, height: 0 });
  const [activeVideoId, setActiveVideoId] = useState<string>('');

  const filteredVideos = useMemo(
    () => VIDEOS.filter((v) => v.category === category),
    [category],
  );

  useEffect(() => {
    if (filteredVideos.length > 0) {
      setActiveVideoId(filteredVideos[0].id);
    }
  }, [filteredVideos]);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems?.[0]?.item?.id) {
      setActiveVideoId(viewableItems[0].item.id);
    }
  }).current;

  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 70 }).current;

  return (
    <View
      style={styles.feedContainer}
      onLayout={(e) => {
        setFeedSize({
          width: e.nativeEvent.layout.width,
          height: e.nativeEvent.layout.height,
        });
      }}
    >
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </Pressable>

      {feedSize.height > 0 && (
        <FlatList
          data={filteredVideos}
          keyExtractor={(item) => item.id}
          snapToInterval={feedSize.height}
          decelerationRate="fast"
          snapToAlignment="start"
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <VideoCard
              source={item.source}
              isActive={item.id === activeVideoId}
              cardHeight={feedSize.height}
              cardWidth={feedSize.width}
              title={item.title}
              category={item.category}
            />
          )}
          getItemLayout={(_, index) => ({
            length: feedSize.height,
            offset: feedSize.height * index,
            index,
          })}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          extraData={{ feedSize, category, activeVideoId }}
        />
      )}
    </View>
  );
}
