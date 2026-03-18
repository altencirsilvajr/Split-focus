import { useEvent } from 'expo';
import { useEffect, useRef, useState } from 'react';
import { Animated, Platform, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
  const [isMuted, setIsMuted] = useState(false);
  const muteScale = useRef(new Animated.Value(1)).current;

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

  const animateMuteButton = () => {
    Animated.sequence([
      Animated.timing(muteScale, {
        toValue: 0.88,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.spring(muteScale, {
        toValue: 1,
        friction: 4,
        tension: 120,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleMuteToggle = () => {
    const nextMuted = !isMuted;
    player.muted = nextMuted;
    setIsMuted(nextMuted);
    animateMuteButton();
  };

  return (
    <Pressable
      style={[styles.card, { height: cardHeight, width: cardWidth }]}
      onPress={handlePress}
    >
      <VideoView
        player={player}
        style={styles.video}
        contentFit="contain"
        nativeControls={Platform.OS === 'ios'}
        allowsPictureInPicture={Platform.OS === 'ios'}
      />
      <Animated.View
        style={[styles.muteButtonContainer, { transform: [{ scale: muteScale }] }]}
      >
        <Pressable
          style={styles.muteButton}
          onPress={(e) => {
            e.stopPropagation();
            handleMuteToggle();
          }}
        >
          <Ionicons
            name={isMuted ? 'volume-mute' : 'volume-high'}
            size={20}
            color="#fff"
          />
        </Pressable>
      </Animated.View>

      <View style={styles.overlay}>
        <Text style={styles.videoTitle}>{title}</Text>
        <Text style={styles.videoCategory}>{category}</Text>
      </View>
    </Pressable>
  );
}
