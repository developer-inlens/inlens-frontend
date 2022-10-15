import {ImagePool} from '@squoosh/lib'
import {cpus} from 'os'

const convert = async file => {
  const imagePool = new ImagePool(cpus().length)
  const image = imagePool.ingestImage(file)

  const preprocessOptions = {
    //When both width and height are specified, the image resized to specified size.
    resize: {
      enabled: true,
      width: 100,
      height: 50,
    },
    /*
    //When either width or height is specified, the image resized to specified size keeping aspect ratio.
    resize: {
      width: 100,
    }
    */
  }
  const pre = await image.preprocess(preprocessOptions)
  const result = await image.encode({webp: 'auto'})
  console.log('***', result)
  await imagePool.close()

  // const rawEncodedImage = await image.encodedWith.webp;
  const {extension, binary} = await image.encodedWith.webp
  return {
    extension,
    image: binary,
  }
}

export default convert
