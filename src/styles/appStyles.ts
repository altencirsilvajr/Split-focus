import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0B0B10',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '800',
  },
  subtitle: {
    color: '#9CA3AF',
    marginTop: 8,
    fontSize: 16,
  },
  chipsRow: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  chip: {
    backgroundColor: '#1F2937',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 999,
  },
  chipActive: {
    backgroundColor: '#8B5CF6',
  },
  chipText: {
    color: '#E5E7EB',
    fontWeight: '600',
    fontSize: 16,
  },
  chipTextActive: {
    color: '#fff',
  },
  card: {
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    left: 16,
    bottom: 40,
    backgroundColor: 'rgba(0,0,0,0.45)',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  videoTitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  videoCategory: {
    color: '#D1D5DB',
    fontSize: 14,
    marginTop: 4,
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  feedContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
