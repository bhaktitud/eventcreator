export const handleImageAsFile = (e, setImageAsFile) => {
    const image = e.target.files[0]
    setImageAsFile(imageFile => (image))
}