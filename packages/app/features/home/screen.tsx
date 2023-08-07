import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
  ScrollView,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <XStack fullscreen>
      <YStack flexGrow={1}>
        <XStack>
          <H1>HEADER</H1>
        </XStack>
        <ScrollView bc="blue" padding="$5">
          <H1>Welcome 1</H1>
          <H1>Welcome 2</H1>
          <H1>Welcome 3</H1>
          <H1>Welcome 4</H1>
          <H1>Welcome 5</H1>
          <H1>Welcome 6</H1>
          <H1>Welcome 7</H1>
          <H1>Welcome 8</H1>
          <H1>Welcome 9</H1>
          <H1>Welcome 10</H1>
          <H1>Welcome 11</H1>
          <H1>Welcome 12</H1>
          <H1>Welcome 13</H1>
          <H1>Welcome 14</H1>
        </ScrollView>
        <H1>FOOTER</H1>
      </YStack>
    </XStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
