import { useEvent } from 'expo';
import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

import { styles } from '../styles/appStyles';

type VideoCardProps = {
  source: number;
  isActive: boolean;
  cardHeight: number;
  cardWidth: number;
  title: string;
  category: string;
};

export function VideoCard({
  source,
  isActive,
  cardHeight,
  cardWidth,
  title,
  category,
}: VideoCardProps) {
  const player = useVideoPlayer(source, (p) => {
    p.loop = true;
    p.muted = false;
  });

  const { isPlaying } = useEvent(player, 'playingChange', {
    isPlaying: player.playing,
  });

  useEffect(() => {
    if (isActive) {
      player.play();
    } else {
      player.pause();
    }
  }, [isActive, player]);

  const handlePress = () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  };

  return (
    <Pressable
      style={[styles.card, { height: cardHeight, width: cardWidth }]}
      onPress={handlePress}
    >
      <VideoView
        player={player}
        style={styles.video}
        contentFit="cover"
        nativeControls={false}
      />
      <View style={styles.overlay}>
        <Text style={styles.videoTitle}>{title}</Text>
        <Text style={styles.videoCategory}>{category}</Text>
      </View>
    </Pressable>
  );
}
