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
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 2,
          photo: 'https://i.ibb.co/BsQ6Q1q/pexels-designecologist-1779487.jpg',
        },
        {
          id: 3,
          photo: 'https://i.ibb.co/McV5BBY/pexels-luis-gomes-546819.jpg',
        },
        {
          id: 4,
          photo: 'https://i.ibb.co/YQ7hfGn/pexels-kevin-ku-577585.jpg',
        },
        {
          id: 5,
          photo: 'https://i.ibb.co/g9BqyjQ/pexels-junior-teixeira-2047905.jpg',
        },
        {
          id: 6,
          photo: 'https://i.ibb.co/LZhy0xw/1634143707923.jpg',
        },
        {
          id: 7,
          photo: 'https://i.ibb.co/s2mBY8Q/cosmetic.png',
        },
        {
          id: 8,
          photo: 'https://i.ibb.co/LZhy0xw/1634143707923.jpg',
        },
        {
          id: 9,
          photo: 'https://i.ibb.co/JmL64c6/Cosmetic-Industry.jpg',
        },
        {
          id: 10,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 11,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 12,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 13,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 1,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 2,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 3,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 4,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 5,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 6,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 7,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 8,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 9,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 10,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 11,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 12,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
        },
        {
          id: 13,
          photo:
            'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
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
