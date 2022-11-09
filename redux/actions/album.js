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
export const getHomeView = async () => {
  try {
    const res = await axios().post('/album/home-view', {
      skip: 0,
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
