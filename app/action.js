'use server'
export async function getProducts() {
  const url = `http:localhost:3000/api/products`
  const res = await fetch(url, {
    method: 'GET',
  })

  const data = await res.json()

  return data
}
