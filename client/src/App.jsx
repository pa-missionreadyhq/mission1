import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function App()
{
  const [image, setImage] = useState(null)
  const [result, setResult] = useState(null)
  const [preview, setPreview] = useState(null)

  const handleUpload = async () =>
  {
    if (!image) return

    const formData = new FormData()
    formData.append("image", image)
    
    const response = await axios.post(
      "http://localhost:4000/predictions",
      formData
    )

    setResult(response.data.predictions[0])
  }

  const handleFilePreview = (e) =>
  {
    const file = e.target.files[0]
    setImage(file)

    if (file)
    {
      const previewUrl = URL.createObjectURL(file)
      setPreview(previewUrl)
    }
    else
    {
      setPreview(null)
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Car Type Checker</h1>
      <br/>

      <input
      type="file"
      onChange={handleFilePreview}
      />
      <br/>

      <button onClick={handleUpload}>
        Upload Image to test & predict
      </button>
      <br/>

      {preview && (
        <div style={{ marginTop: 20 }}>
          <h3>Image preview</h3>
          <br/>
          <img src={preview} style={{ maxWidth: 300, maxHeight: 300 }}/>
        </div>
      )}

    {result && (
      <div>
        <h2>{result.tagName}</h2>
        <p>
          {(result.probability * 100).toFixed(2)}% confidence
        </p>
        </div>
    )}
  </div>
  )
}

export default App