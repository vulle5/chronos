import { Stack } from 'expo-router';
import { ThemedView } from '@/components/primitives/ThemedView';
import { ThemedText } from '@/components/primitives/ThemedText';

export default function Modal() {
  return (
    <>
      <Stack.Screen options={{ title: 'Modal', presentation: 'modal' }} />
      <ThemedView className="flex-1 items-center justify-center">
        <ThemedText type="title">Modal</ThemedText>
      </ThemedView>
    </>
  );
}
