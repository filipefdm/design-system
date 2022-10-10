import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A soluta, vero, quia obcaecati repellendus aperiam doloribus consequatur labore excepturi eveniet impedit ad voluptatibus distinctio aspernatur sit natus maiores hic autem!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}
