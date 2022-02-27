import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  albums: [
    {
      id: '1',
      count: 2,
      title: 'Munnar trip',
      color: '#EF9A9A',
      photos: [
        {
          id: 1,
          photo_thumb_base64:
            'UklGRswAAABXRUJQVlA4TL8AAAAvCcABAE1kRP9jEYMf/Q/hNrZtVVnvR+6fTBulRlp4IUP0IHMvgm0k201OwnsyCH//3dDBL0FDJC+mkW07OTwayGB/KVg6ZlCUgWKuRuWcIndfqfFq/wN74oHAz5AZXtaqagDwBwAAIAgzdf3AP3R8bLnPAACqKEBRgO7Xf3hbEBHY0kAg3kUPed73U03cVpWgdwMgjiqf7W79ZXnTHSCgIq6/SY4t0OpyJUPug/Efc3Se8mI+F8U7/V3duNdNNQA=',
          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F1_5.3MB.webp?alt=media&token=68eeb919-f6d9-45cc-a937-23a28cfbfe78',
        },
        {
          id: 2,
          photo_thumb_base64:
            'UklGRqoAAABXRUJQVlA4TJ4AAAAvCQABAE1kRP9jEYMR/Q/BNrJtJRd3iH6G/I9kFEBM/0W4O2TWB6NIkhT17jHzv/2r6jgFzMQ6kmxT82wncPNP6Rn/NiPyC/2XpHNJ/Lmxofn+nP2cYBTD71x/ITopoQCgAFRVASgFBU+vZTalFFQUBIKiKiigAeCPNLd0AAoJABAIigocAP50ra25npY6JPevjR/z/6ddR8L+e03y/Q==',
          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F2_3.3MB.webp?alt=media&token=5c266ebd-50fb-4b5c-ad06-adb1439d947d',
        },
        {
          id: 3,
          photo_thumb_base64:
            'UklGRiQBAABXRUJQVlA4TBcBAAAvCQADAAk1bRuw8OtuRP8D9BcxIAPS/3iB29i2VWX/jxM5sVsX9EEP1PhivIQzxPbdpQ3HtW21yjZnJTRACfZfDVNnOQvfVW3bqjLfw/1GOP1TEIEEjPOJu2sErDeXqtf/XqccVouGX62qRrKhPs9/LxzmNZxwGITD4MxB4v+vTpMKQOdCSAQOMHCYLS5Wr2EOCEHJuYRy6PRaEwDmwJF5JQdrOnr0rlBBBQZJSUf5tNGlNwVIGmnMhIDO5P02l8TUgASECmqJtgr7gZjXQDhnMBcA6afldg5OOOAAABwLlB6f0Qp4AxCSc+EEw/yvR7UTDM6FUJxw4HwA6IYH325/3Ekml2zfytqf9vdPx2b7toZ/cWta8woA',

          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F3_4.75MB_.webp?alt=media&token=63881f76-ce27-412a-8371-638015a0aaf5',
        },
        {
          id: 4,
          photo_thumb_base64:
            'UklGRsgAAABXRUJQVlA4TLwAAAAvBgACAIkbHET0P1oMSByEv//BcFTb1pId3H3E7M3oYrmoQRQykEAD6O+Sw1Uk22rUYQYJkRL/Engl8H4FmNi2reTg7mTWT0yAxGz/tGie+QmXiDJskn8Q3OF1Hm0lV0vzar8XPAACAEjiZ3qOz14gRK/vyE9yJ3EJgBACkJ91VpuC+JluPQAUSeVNK0T8VALQj334cYynzoOtVyPGod+eDEX3TP9YCgWFFGm+aqbNsP2vU71v87ipE/3eAA==',

          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F4_4.74MB.webp?alt=media&token=1f2cab3d-d41c-4ffc-b18f-88c880bb05b1',
        },
        {
          id: 5,
          photo_thumb_base64:
            'UklGRrIAAABXRUJQVlA4TKUAAAAvBgACAE1kRP9jEQMf/Q/htrZtJboZLiW8mFZpihY8dnd3mOmCcSNJTgrvyT88QuB3HlhHtpXmAHG3Aui/Kv7j7klMgN7X9/AzTUzl0mrm9XLYNqmzfAAEog2m+/93fAAfoIkBzGY9A3/A/9tEM79/e/RYqIZ7k8m+qugNeLM9ekD3P1WOCT5UA+A/lF/VNwdQDZD99Xck1/Wdoyc4TBAD8Yz30d0A',

          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F5_4.96MB.webp?alt=media&token=b07c7de8-1a49-436e-80de-e6ffc146571f',
        },
        {
          id: 6,
          photo_thumb_base64:
            'UklGRrwAAABXRUJQVlA4TK8AAAAvBgACAE1kRP9jETEC/Q/htrZtJTpI6BC65pTwC6MYSiGHIl6IZTY+dbiqbVupJs4nEU4W+ldwCGDPlXEk2UrmOw4hvPyT4t9x10NEt7ZrkZDZwG+831fqrtQ4qcUsGgAAiX0kCgiok6cERLdu/AUgG3mIZ8bsnO/VmhxqjAOEtNs850FdA1Bj7ANCBGZ3HbsSgBwEwNzu6QgASJCPAKvZmr8L38tJP8v879+Z3/cDAA==',

          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F6_4.83MB.webp?alt=media&token=e80dae2b-1ec7-4960-9a73-391fce65fc6b',
        },
        {
          id: 7,
          photo_thumb_base64:
            'UklGRswAAABXRUJQVlA4TL8AAAAvBgACAIXjAACIaKfaoGcT9LNt62wbP9salWEAAGUyt/3/opEdA0mSDK3//7Lds23biOh/FHl3QlVLtDVU/OH2Ket8FrEuVjJvLHXCqwMa7q0dkyrc/L7yiiqSZN0H2XiWZZLw3ReCF2aHBMnS8o3TykbxjJM+5sTIQbbGv/T7RLIr8uujXx6bEJmsFzsi9CDGQBqgp4LfjKmPVgYgBE3w8mZw3WbEK81n0D8ffUY7g3TF5Uvq7/U36M8CfMUOAAA=',
          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F7_4.15MB.webp?alt=media&token=f899f0c5-7528-499f-ac02-f1d2335e9b94',
        },
      ],
    },
  ],
}

export const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    createAlbum: (state, action) => {
      state.albums.unshift(action.payload)
    },
    addPhoto: (state, action) => {
      state.albums[
        state.albums.findIndex(item => item.id === action.payload.id)
      ].photos.unshift(action.payload.photo)
    },
  },
})

export const {createAlbum, addPhoto} = albumSlice.actions

export default albumSlice.reducer
