import { BrainrotVideo, Category } from '../types/video';

const formatTitle = (raw: string) => {
  const cleaned = raw.replace(/[-_]+/g, ' ').trim();
  return cleaned
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const ABSTRACT_FILES = [
  { name: 'video_lowres_2', source: require('../../assets/videos/Abstract/video_lowres_2.mp4') },
  { name: 'video_lowres_3', source: require('../../assets/videos/Abstract/video_lowres_3.mp4') },
  { name: 'video_lowres_4', source: require('../../assets/videos/Abstract/video_lowres_4.mp4') },
  { name: 'video_lowres_5', source: require('../../assets/videos/Abstract/video_lowres_5.mp4') },
];

const MINECRAFT_FILES = [
  { name: 'bg-1-low', source: require('../../assets/videos/Minecraft/bg-1-low.mp4') },
  { name: 'bg-2-low', source: require('../../assets/videos/Minecraft/bg-2-low.mp4') },
  { name: 'bg-3-low', source: require('../../assets/videos/Minecraft/bg-3-low.mp4') },
  { name: 'bg-4-low', source: require('../../assets/videos/Minecraft/bg-4-low.mp4') },
  { name: 'bg-5-low', source: require('../../assets/videos/Minecraft/bg-5-low.mp4') },
  { name: 'color_low', source: require('../../assets/videos/Minecraft/color_low.mp4') },
  { name: 'island_low', source: require('../../assets/videos/Minecraft/island_low.mp4') },
  { name: 'orbit_low', source: require('../../assets/videos/Minecraft/orbit_low.mp4') },
  { name: 'skyscraper_low', source: require('../../assets/videos/Minecraft/skyscraper_low.mp4') },
  { name: 'water_low', source: require('../../assets/videos/Minecraft/water_low.mp4') },
];

const SATISFYING_FILES = [
  { name: 'cone_low', source: require('../../assets/videos/Satisfying/cone_low.mp4') },
  { name: 'crush_low', source: require('../../assets/videos/Satisfying/crush_low.mp4') },
  { name: 'dominos_low', source: require('../../assets/videos/Satisfying/dominos_low.mp4') },
  { name: 'forks_low', source: require('../../assets/videos/Satisfying/forks_low.mp4') },
  { name: 'fruits_low', source: require('../../assets/videos/Satisfying/fruits_low.mp4') },
  { name: 'horse_low', source: require('../../assets/videos/Satisfying/horse_low.mp4') },
  { name: 'mag_low', source: require('../../assets/videos/Satisfying/mag_low.mp4') },
  { name: 'marble_race_low', source: require('../../assets/videos/Satisfying/marble_race_low.mp4') },
  { name: 'painting_low', source: require('../../assets/videos/Satisfying/painting_low.mp4') },
  { name: 'pebbles_low', source: require('../../assets/videos/Satisfying/pebbles_low.mp4') },
  { name: 'petals_low', source: require('../../assets/videos/Satisfying/petals_low.mp4') },
  { name: 'pumkin_low', source: require('../../assets/videos/Satisfying/pumkin_low.mp4') },
  { name: 'rainbow_low', source: require('../../assets/videos/Satisfying/rainbow_low.mp4') },
  { name: 'sand_low', source: require('../../assets/videos/Satisfying/sand_low.mp4') },
  { name: 'soap_low', source: require('../../assets/videos/Satisfying/soap_low.mp4') },
  { name: 'sponge_low', source: require('../../assets/videos/Satisfying/sponge_low.mp4') },
  { name: 'straw_low', source: require('../../assets/videos/Satisfying/straw_low.mp4') },
];

const SUBWAY_SURFERS_FILES = [
  { name: '1', source: require('../../assets/videos/Subway_surfes/1.mp4') },
  { name: '2', source: require('../../assets/videos/Subway_surfes/2.mp4') },
  { name: '3', source: require('../../assets/videos/Subway_surfes/3.mp4') },
  { name: '4', source: require('../../assets/videos/Subway_surfes/4.mp4') },
  { name: '5', source: require('../../assets/videos/Subway_surfes/5.mp4') },
  { name: '6', source: require('../../assets/videos/Subway_surfes/6.mp4') },
  { name: 'china_surfer_low', source: require('../../assets/videos/Subway_surfes/china_surfer_low.mp4') },
  { name: 'green_surfer_low', source: require('../../assets/videos/Subway_surfes/green_surfer_low.mp4') },
  { name: 'jump_surfer_low', source: require('../../assets/videos/Subway_surfes/jump_surfer_low.mp4') },
  { name: 'red-surfer_low', source: require('../../assets/videos/Subway_surfes/red-surfer_low.mp4') },
  { name: 'snow-surfer_low', source: require('../../assets/videos/Subway_surfes/snow-surfer_low.mp4') },
];

const TRACKMANIA_FILES = [
  { name: 'video_lowres_1', source: require('../../assets/videos/Trackmania/video_lowres_1.mp4') },
  { name: 'video_lowres_2', source: require('../../assets/videos/Trackmania/video_lowres_2.mp4') },
  { name: 'video_lowres_3', source: require('../../assets/videos/Trackmania/video_lowres_3.mp4') },
  { name: 'video_lowres_4', source: require('../../assets/videos/Trackmania/video_lowres_4.mp4') },
  { name: 'video_lowres_5', source: require('../../assets/videos/Trackmania/video_lowres_5.mp4') },
];

const buildVideos = (
  files: { name: string; source: number }[],
  category: Category,
  prefix: string,
): BrainrotVideo[] =>
  files.map((file, index) => ({
    id: `${prefix}-${index + 1}`,
    title: formatTitle(file.name),
    category,
    source: file.source,
  }));

export const VIDEOS: BrainrotVideo[] = [
  ...buildVideos(ABSTRACT_FILES, 'Abstract', 'abs'),
  ...buildVideos(MINECRAFT_FILES, 'Minecraft', 'mc'),
  ...buildVideos(SATISFYING_FILES, 'Satisfying', 'sat'),
  ...buildVideos(SUBWAY_SURFERS_FILES, 'Subway Surfers', 'sub'),
  ...buildVideos(TRACKMANIA_FILES, 'Trackmania', 'trk'),
];

export const CATEGORIES: Category[] = [
  'Abstract',
  'Minecraft',
  'Satisfying',
  'Subway Surfers',
  'Trackmania',
];
