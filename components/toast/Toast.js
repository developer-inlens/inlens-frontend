import React from 'react'
import {Box, Alert, useToast, Text} from 'native-base'

// const Toast = ({toast}) => {
//   //   const toast = useToast()

//   toast.show({
//     render: () => {
//       return (
//         <Box
//           bg="#272727"
//           px="5"
//           py="5"
//           rounded="md"
//           mb={5}
//           flexDir="row"
//           justifyContent="center"
//           alignItems="center">
//           <Alert.Icon color="#FFCC80" />
//           <Text marginLeft={5}>
//             Photos will be uploaded background. Check notification for progress
//           </Text>
//         </Box>
//       )
//     },
//   })
// }

// export default Toast

export function useFriendStatus(friendID) {
  const toast = useToast()
  toast.show({
    render: () => {
      return (
        <Box
          bg="#272727"
          px="5"
          py="5"
          rounded="md"
          mb={5}
          flexDir="row"
          justifyContent="center"
          alignItems="center">
          <Alert.Icon color="#FFCC80" />
          <Text marginLeft={5}>
            Photos will be uploaded background. Check notification for progress
          </Text>
        </Box>
      )
    },
  })
}

// export function useFriendStatus(friendID) {
//   //   const [isOnline, setIsOnline] = useState(null)

//   // ...

//   return 'isOnline'
// }
