import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const fuzzySearch = async (data) => {
  const fuzzySearchFilter = {}
  Object.keys(data).forEach((key) => {
    fuzzySearchFilter[key] = { contains: data[key], mode: 'insensitive' } // contains kullanarak fuzzy arama yapılıyor
  })

  // Prisma ile veritabanında arama yapılıyor
  const result = await prisma.product.findMany({
    where: fuzzySearchFilter,
  })

  return result
}

//! /api/products/search to Car Search for post process
export async function POST(request) {
  const req = await request.json()

  const result = await fuzzySearch({ name: req.query }) // query olarak gönderilen veriye erişiliyor

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
