import React from 'react'
import { TouchableOpacity, View } from 'react-native'

type Props = {
  checked: boolean
  diameter?: number
  disable?: boolean
  action: () => void
}
const RadioButton = ({ checked, diameter, disable, action }: Props) => {
  const [value, setValue] = React.useState(checked)
  const defaultDiameter = 24

  return (
    <TouchableOpacity
      disabled={disable}
      style={{ width: 25, height: 25 }}
      onPress={() => {
        setValue(!value)
        action()
      }}>
      <View
        style={{
          height: diameter ? diameter : defaultDiameter,
          width: diameter ? diameter : defaultDiameter,
          borderRadius: diameter ? diameter / 2 : defaultDiameter / 2,
          borderWidth: 2,
          borderColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {value ? (
          <View
            style={{
              height: diameter ? diameter / 2 : defaultDiameter / 2,
              width: diameter ? diameter / 2 : defaultDiameter / 2,
              borderRadius: diameter ? diameter / 4 : defaultDiameter / 4,
              backgroundColor: '#000',
            }}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  )
}
export default RadioButton
