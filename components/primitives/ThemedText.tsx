import { Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

const typeClasses: Record<NonNullable<ThemedTextProps['type']>, string> = {
  default: 'text-base leading-6 text-foreground',
  defaultSemiBold: 'text-base leading-6 font-semibold text-foreground',
  title: 'text-[32px] font-bold leading-8 text-foreground',
  subtitle: 'text-xl font-bold text-foreground',
  link: 'text-base leading-[30px] text-[#0a7ea4]',
};

export function ThemedText({ className, type = 'default', ...rest }: ThemedTextProps) {
  return <Text className={`${typeClasses[type]}${className ? ` ${className}` : ''}`} {...rest} />;
}
