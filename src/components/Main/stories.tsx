import { Meta, StoryObj } from '@storybook/react'
import Main from '.'
import { Description } from './styles'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
    args: {
        title: 'title basic',
        description: 'description basisc'
    }
}