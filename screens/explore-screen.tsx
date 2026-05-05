import { Image } from 'expo-image';
import { Platform, View } from 'react-native';

import { ExternalLink } from '@/components/ExternalLink';
import { IconSymbol } from '@/components/primitives/IconSymbol';
import { ThemedText } from '@/components/primitives/ThemedText';
import { ThemedView } from '@/components/primitives/ThemedView';
import { Collapsible } from '@/components/ui/Collapsible';
import ParallaxScrollView from '@/components/ui/ParallaxScrollView';
import TaskCard from '@/components/ui/TaskCard';

const SAMPLE_TASKS = [
  { id: '1', title: 'Team standup', time: '9:00 AM – 9:30 AM', color: '#0a7ea4', completed: false },
  { id: '2', title: 'Design review', time: '10:00 AM – 11:00 AM', color: '#7c3aed', completed: false },
  { id: '3', title: 'Write unit tests', time: '11:30 AM – 12:00 PM', color: '#16a34a', completed: true },
  { id: '4', title: 'Lunch break', time: '12:00 PM – 1:00 PM', color: '#ea580c', completed: true },
];

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={{ color: '#808080', bottom: -90, left: -35, position: 'absolute' }}
        />
      }>
      <ThemedView style={{ flexDirection: 'row', gap: 8 }}>
        <ThemedText type="title">
          Explore
        </ThemedText>
      </ThemedView>

      <ThemedText>This app includes example code to help you get started.</ThemedText>

      <Collapsible title="TaskCard component">
        <ThemedText>
          The <ThemedText type="defaultSemiBold">TaskCard</ThemedText> component renders a single
          task in the schedule. It supports a color indicator, time range, and a completed state.
        </ThemedText>
        <View className="mt-3 gap-2">
          {SAMPLE_TASKS.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              time={task.time}
              color={task.color}
              completed={task.completed}
              onPress={() => {}}
            />
          ))}
        </View>
      </Collapsible>

      <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText>{' '}
          and <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful{' '}
          <ThemedText type="defaultSemiBold">
            react-native-reanimated
          </ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The{' '}
              <ThemedText type="defaultSemiBold">
                components/ParallaxScrollView.tsx
              </ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}
