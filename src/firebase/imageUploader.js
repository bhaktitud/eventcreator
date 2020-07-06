import { storage } from './firebase'

export const handleFirebaseUpload = (e, imageAsFile, setImageAsUrl, setSubmit) => {
    e.preventDefault()
    console.log('image uploading...')
    if(imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
    }
    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
    uploadTask.on('state_changed', 
      (snapShot) => {
        console.log(snapShot)
      }, (err) => {
        console.log(err)
      }, () => {
        storage.ref('images').child(imageAsFile.name).getDownloadURL()
          .then(fireBaseUrl => {
            setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
            setSubmit(prevObject => ({...prevObject, status: true}))
          })
      }
    )
  }