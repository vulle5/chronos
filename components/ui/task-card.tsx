import { Pressable } from 'react-native';

import { IconSymbol } from '@/components/primitives/IconSymbol';
import { ThemedText } from '@/components/primitives/ThemedText';
import { ThemedView } from '@/components/primitives/ThemedView';

interface TaskCardProps {
  title: string;
  time: string;
  color?: string;
  completed?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  className?: string;
}

const TaskCard = ({
  title,
  time,
  color = '#0a7ea4',
  completed = false,
  onPress,
  onLongPress,
  className,
}: TaskCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className={`active:opacity-70 ${className ?? ''}`}
    >
      <ThemedView className="flex-row items-center overflow-hidden rounded-xl border border-zinc-100 dark:border-zinc-800">
        <ThemedView style={{ backgroundColor: color }} className="w-1 self-stretch" />
        <ThemedView className="flex-1 gap-0.5 px-3 py-2.5">
          <ThemedText
            type="defaultSemiBold"
            numberOfLines={1}
            className={completed ? 'opacity-50 line-through' : ''}
          >
            {title}
          </ThemedText>
          <ThemedText className="text-sm opacity-60">{time}</ThemedText>
        </ThemedView>
        {completed && (
          <ThemedView className="pr-3">
            <IconSymbol name="checkmark.circle.fill" size={20} color={color} />
          </ThemedView>
        )}
      </ThemedView>
    </Pressable>
  );
};

export default TaskCard;
