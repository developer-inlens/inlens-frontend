import React from 'react'
import ButtonOne from './TypeOne'
import ButtonFour from './TypeFour'
// import ButtonFive from './TypeFive'
// import ButtonSix from './TypeSix'

// TYPE 1: Small buttons, used in event days
// TYPE 2: Medium size button, used in join album
// TYPE 3: Curved button
// TYPE 4: Normal buttons, Done
// TYPE 5: Large icon buttons, scan
// TYPE 6: FAB

// <Button type={5} name="qr-code" title="Scan Participants QR CODE" />;

const Index = ({
  type,
  onPress,
  isIncrement,
  title,
  name,
  disabled,
  loading,
  icon = true,
}) => {
  switch (type) {
    case 1:
      return (
        <ButtonOne
          isIncrement={isIncrement}
          onPress={onPress}
          disabled={disabled}
        />
      )
    case 4:
      return (
        <ButtonFour
          title={title}
          onPress={onPress}
          disabled={disabled}
          loading={loading}
          icon={icon}
        />
      )
    // case 5:
    //   return <ButtonFive title={title} onPress={onPress} name={name} />
    // case 6:
    //   return <ButtonSix title={title} onPress={onPress} />
    default:
      return null
  }
}

export default Index
