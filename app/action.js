'use server'
export async function getProducts() {
  const url = `http:localhost:3000/api/products`
  const res = await fetch(url, {
    method: 'GET',
  })

  const data = await res.json()

  return data
}
export async function DeleteProducts(id) {
  const url = `http:localhost:3000/api/products/${id}`
  const res = await fetch(url, {
    method: 'DELETE',
  })

  const data = await res.json()

  return data
}
export async function GetSingleProducts(id) {
  const url = `http:localhost:3000/api/products/${id}`
  const res = await fetch(url, {
    method: 'GET',
  })

  const data = await res.json()

  return data
}
export async function EditProducts(id, newData) {
  const url = `http://localhost:3000/api/products/${id}`
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData), // Gönderilecek veriyi JSON formatına dönüştür
  })

  const data = await res.json() // Sunucudan dönen veriyi al

  return data // Dönen veriyi döndür
}

export async function CreateProducts(data) {
  const url = `http://localhost:3000/api/products`
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await res.json()
    return result
  } catch (error) {
    console.error('Bir hata oluştu:', error)
    return null
  }
}
