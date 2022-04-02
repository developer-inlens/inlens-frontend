import MasonryList from 'react-native-masonry-list'
import React from 'react'

//...
const Masonry = () => {
  return (
    <MasonryList

      itemSource={['node', 'image']}
      images={[
        {
          node: {
            image: {
              uri: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F1_5.3MB.webp?alt=media&token=68eeb919-f6d9-45cc-a937-23a28cfbfe78',
            },
          },
        },
        // {
        //   node: {
        //     image: {
        //       source: require('yourApp/image.png'),
        //       dimensions: {width: 1080, height: 1920},
        //     },
        //   },
        // },
        // {
        //   node: {
        //     image: {
        //       source: require('yourApp/image.png'),
        //       width: 1080,
        //       height: 1920,
        //     },
        //   },
        // },
        {
          node: {
            image: {
              source: {
                uri: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F2_3.3MB.webp?alt=media&token=5c266ebd-50fb-4b5c-ad06-adb1439d947d',
              },
            },
          },
        },
        {
          node: {
            image: {
              uri: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F3_4.75MB_.webp?alt=media&token=63881f76-ce27-412a-8371-638015a0aaf5',
              //   dimensions: {width: 1080, height: 1920},
            },
          },
        },
        {
          node: {
            image: {
              URI: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F4_4.74MB.webp?alt=media&token=1f2cab3d-d41c-4ffc-b18f-88c880bb05b1',
              id: 'blpccx4cn',
            },
          },
        },
        {
          node: {
            image: {
              url: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F5_4.96MB.webp?alt=media&token=b07c7de8-1a49-436e-80de-e6ffc146571f',
            },
          },
        },
        {
          node: {
            image: {
              URL: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F6_4.83MB.webp?alt=media&token=e80dae2b-1ec7-4960-9a73-391fce65fc6b',
            },
          },
        },
        {
          node: {
            image: {
              URL: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F7_4.15MB.webp?alt=media&token=f899f0c5-7528-499f-ac02-f1d2335e9b94',
            },
          },
        },
      ]}
    />
  )
}
export default Masonry
