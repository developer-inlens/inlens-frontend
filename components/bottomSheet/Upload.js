import React from 'react'
import {VStack, Text} from 'native-base'
import Button from '../button/Index'
import {useNavigation} from '@react-navigation/native'
const Upload = ({setVisible}) => {
  const navigation = useNavigation()
  return (
    <VStack>
      <Button
        type={4}
        title="Yesterday"
        icon={false}
        onPress={() => {
          setVisible()
          navigation.navigate('PhotoUpload')
        }}
        // loading={loading}
      />
      <Button
        type={4}
        title="Last Week"
        icon={false}
        // onPress={onAlbumCreate}
        // loading={loading}
      />
      <Button
        type={4}
        title="Last Month"
        icon={false}
        // onPress={onAlbumCreate}
        // loading={loading}
      />
      <Button
        type={4}
        title="Laast Album"
        icon={true}
        // onPress={onAlbumCreate}
        // loading={loading}
      />
    </VStack>
  )
}

export default Upload
