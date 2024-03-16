'use client'
import { useEffect, useState } from 'react'
import { DeleteProducts, getProducts } from '../../../../action'
import { Table } from 'react-bootstrap'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import EditProduct from '../edit/EditProduct'
import { ThData } from '../../../../../data/Data'
const Producttable = () => {
  const [ProductData, setProductData] = useState()
  const [EditItem, setEditItem] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      setProductData(data)
    }
    fetchData()
  }, [])

  const handleDelete = async (id) => {
    await DeleteProducts(id)
    const data = await getProducts()
    setProductData(data)
  }

  return (
    <div>
      <Table bordered responsive hover>
        <thead>
          <tr>
            {ThData.map((item, index) => {
              return (
                <th
                  key={index}
                  className="fs-6"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {item.name}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {ProductData?.map((item) => (
            <tr key={item.id}>
              <td>{item.category}</td>
              <td>{item.comments}</td>
              <td>{item.discount}</td>
              <td>{item.fallenPrice ? 'True' : 'False'}</td>
              <td>
                <div
                  className="overflow-hidden"
                  style={{ maxWidth: '40px', maxHeight: '40px' }}
                >
                  <img
                    style={{ width: '100%', height: '100%' }}
                    src={item.image}
                    alt={item.name}
                  />
                </div>
              </td>
              <td>{item.name}</td>
              <td>{item.newOrOld}</td>
              <td>{item.newPrice}</td>
              <td>{item.oldPrice}</td>
              <td>{item.stars}</td>
              <td>
                <div className="d-flex my-auto gap-2">
                  <MdOutlineDeleteOutline
                    onClick={() => handleDelete(item.id)}
                    className="fs-4"
                  />
                  <EditProduct item={item} setProductData={setProductData} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Producttable
