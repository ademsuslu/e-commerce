import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async (request, { params }) => {
  const { slug } = params // params nesnesinden id'yi alınır

  try {
    const product = await prisma.product.findUnique({
      // Prisma ile belirli bir ürünü getir
      where: {
        id: slug, // id'yi sayıya dönüştürerek kullanın
      },
    })

    if (!product) {
      return new Response('Ürün bulunamadı', { status: 404 })
    }

    return new Response(JSON.stringify(product), {
      // Ürünü JSON formatında yanıt olarak döndür
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  } catch (error) {
    console.error('Ürünü getirirken hata oluştu:', error)
    return new Response('Ürünü getirirken bir hata oluştu', { status: 500 })
  }
}

export const DELETE = async (request, { params }) => {
  const { slug } = params // params nesnesinden id'yi alınır

  try {
    const product = await prisma.product.delete({
      // Prisma ile belirli bir ürünü sil
      where: {
        id: slug, // id'yi direk kullanın
      },
    })

    if (!product) {
      return new Response('Ürün bulunamadı', { status: 404 })
    }

    return new Response(JSON.stringify(product), {
      // Silinen ürünü JSON formatında yanıt olarak döndür
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  } catch (error) {
    console.error('Ürünü silerken hata oluştu:', error)
    return new Response('Ürünü silerken bir hata oluştu', { status: 500 })
  }
}

export const PUT = async (request, { params }) => {
  const { slug } = params // params nesnesinden id'yi alınır
  const body = await request.json() // Gelen isteği JSON formatında al

  try {
    // Güncellenecek ürünü bul
    const existingProduct = await prisma.product.findUnique({
      where: {
        id: slug, // id'yi doğrudan kullan
      },
    })

    // Ürün bulunamazsa 404 yanıtı döndür
    if (!existingProduct) {
      return new Response('Ürün bulunamadı', { status: 404 })
    }

    // Yalnızca gönderilen verileri kullanarak yeni bir ürün objesi oluştur
    const updatedProduct = await prisma.product.update({
      where: {
        id: slug, // Güncellenecek ürünün id'sini belirt
      },
      data: {
        name: body.name || existingProduct.name, // Gönderilen isim varsa kullan, yoksa mevcut ismi kullan
        discount: body.discount || existingProduct.discount,
        image: body.image || existingProduct.image,
        newPrice: body.newPrice || existingProduct.newPrice,
        oldPrice: body.oldPrice || existingProduct.oldPrice,
        stars: body.stars || existingProduct.stars,
        comments: body.comments || existingProduct.comments,
        fallenPrice: body.fallenPrice || existingProduct.fallenPrice,
        newOrOld: body.newOrOld || existingProduct.newOrOld,
        category: body.category || existingProduct.category,
      },
    })

    // Güncellenen ürünü JSON formatında yanıt olarak döndür
    return new Response(JSON.stringify(updatedProduct), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  } catch (error) {
    // Herhangi bir hata durumunda 500 yanıtı döndür
    console.error('Ürünü güncellerken hata oluştu:', error)
    return new Response('Ürünü güncellerken bir hata oluştu', { status: 500 })
  }
}
