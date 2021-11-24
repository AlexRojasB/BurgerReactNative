import React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { spacing } from "../../theme"
import { translate } from "../../i18n/"
import { Container, HStack, Text, Icon  } from "native-base"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
  justifyContent: "flex-start",
}
const TITLE: TextStyle = { textAlign: "center", color:'#fff' }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText,
    headerTx,
    style,
    titleStyle,
  } = props
  const header = headerText || (headerTx && translate(headerTx)) || ""

  return (
    <Container>
      <HStack>
     
        <Button preset="link" onPress={onLeftPress}>
          <Icon name="ios-menu" />
        </Button>
     
      <View style={TITLE_MIDDLE}>
        <Text style={TITLE}>Pato</Text>
      </View>
     
        <Button preset="link" onPress={onRightPress}>
          <Icon name="shopping-cart" />
          </Button>
    
      </HStack>
    </Container>
  )
}
