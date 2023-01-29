import axios from '../../utils/axios'

export const createAlbum = async data => {
  try {
    const res = await axios().post('/album/create', data)
    return {data: res.data, error: null}
  } catch (err) {
    return {
      data: null,
      err: err.response?.data?.message ?? 'Something went wrong',
    }
  }
}
export const getHomeView = async (page = 0) => {
  try {
    const res = await axios().post('/album/home-view', {
      skip: page,
      type: 0,
    })
    const data = {...res.data}
    data.albums[0] = {
      ...data.albums[0],
      participants: data.participants,
      photos: data.photos ?? [],
    }
    return {data, err: null}
  } catch (err) {
    return {
      data: null,
      err: err.response?.data?.message ?? 'Something went wrong',
    }
  }
}

export const uploadPhoto = async data => {
  try {
    const res = await axios({
      'Content-Type': 'multipart/form-data',
    }).post('/photo/upload', data)
    console.log('&&&&', res)
  } catch (err) {
    console.log('@@@', err)
  }
}

export const getAlbumDetails = async id => {
  try {
    const res = await axios().post('/album/details', {
      album_id: id,
    })
    const data = {...res.data}
    // data.albums[0] = {
    //   // ...data.albums[0],
    //   participants: data.participants,
    //   photos: data.photos ?? [],
    // }
    return {data, err: null}
  } catch (err) {
    return {
      data: null,
      err: err.response?.data?.message ?? 'Something went wrong',
    }
  }
}

export const getPhotos = async (album_id, page = 0) => {
  console.log('&&&', page)
  try {
    const res = await axios().post('/photo/home-view', {
      album_id,
      skip: page,
    })
    // const data = {...res.data}
    console.log('^^^^^^', res.data)
    return {data: res.data, err: null}
  } catch (err) {
    return {
      data: null,
      err: err.response?.data?.message ?? 'Something went wrong',
    }
  }
}
