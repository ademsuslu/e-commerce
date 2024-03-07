import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const products = await prisma.product.findMany() // Tüm ürünleri getir
    if (!products) {
      return new Response('Ürün bulunamadı', { status: 404 })
    }
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  } catch (error) {
    console.error('Ürünleri getirirken hata oluştu:', error)
    return new Response('Ürünleri getirirken bir hata oluştu', { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      name,
      discount,
      image,
      newPrice,
      oldPrice,
      stars,
      comments,
      fallenPrice,
      newOrOld,
      category,
    } = body

    const product = await prisma.product.create({
      data: {
        name: name,
        discount: discount,
        image: image,
        newPrice: newPrice,
        oldPrice: oldPrice,
        stars: stars,
        comments: comments,
        fallenPrice: fallenPrice,
        newOrOld: newOrOld,
        category: category,
      },
    })

    const responseBody = JSON.stringify(product)
    return new Response(responseBody, {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(error.message, { status: 500 })
  }
}
