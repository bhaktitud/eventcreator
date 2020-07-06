import { storage } from './firebase'

export const handleFirebaseUpload = (e, imageAsFile, setImageAsUrl, setSubmit, setIsLoading) => {
    e.preventDefault()
    // console.log('image uploading...')
    setIsLoading(prevObject => ({...prevObject, status: true}))

    if(imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
      setIsLoading(prevObject => ({...prevObject, status: false}))
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
            setIsLoading(prevObject => ({...prevObject, status: false}))
          })
      }
    )
  }