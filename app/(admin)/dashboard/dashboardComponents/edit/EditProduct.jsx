'use client'
import { Modal, Form, Button } from 'react-bootstrap'
import { CiEdit } from 'react-icons/ci'
import {
  getProducts,
  EditProducts,
  GetSingleProducts,
} from '../../../../action'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ImageUpload from '../../../../components/ImageUpload/ImageUpload'
const EditProduct = ({ item }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [valueItem, setValueItem] = useState()
  const form = useForm({
    defaultValues: {
      name: '',
      discount: 0,
      image: '',
      newPrice: 0,
      oldPrice: 0,
      stars: 0,
      comments: 0,
      fallenPrice: true,
      newOrOld: 'New',
      category: '',
    },
  })
  const { reset, watch, setValue } = form
  const image = watch('image')
  const handleSubmit = async (id, valueItem) => {
    const newData = {
      ...valueItem,
      discount: Number(valueItem.discount),
      newPrice: Number(valueItem.newPrice),
      oldPrice: Number(valueItem.oldPrice),
      stars: Number(valueItem.stars),
      comments: Number(valueItem.comments),
      fallenPrice: Boolean(valueItem.fallenPrice),
    }
    console.log(newData)
    await EditProducts(id, newData)
    window.location.reload()
    const res = await getProducts()
    setProductData(res)
    reset() // formu yolladıkdan sonra formdaki verileri siliyor

    handleClose()
    return res
  }
  const handleEditItem = async (id) => {
    handleShow()
    const Item = await GetSingleProducts(id)
    setValueItem(Item)
    return Item
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setValueItem((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const setCustomValue = (id, value) => {
    setValue(id, value)
  }
  return (
    <div>
      <CiEdit onClick={() => handleEditItem(item.id)} className="fs-4" />

      <Modal className="bg-secondary" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <Form onSubmit={() => handleSubmit(item.id, valueItem)}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={valueItem?.name}
                onChange={(e) => handleChange(e)}
                name="name"
                autoComplete="false"
                type="text"
                placeholder="Ürün Adı"
                className="form-control border"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="discount">
              <Form.Label>Discount</Form.Label>
              <Form.Control
                value={valueItem?.discount}
                onChange={(e) => handleChange(e)}
                name="discount"
                autoComplete="false"
                type="number"
                placeholder="Product discount %?"
                className="form-control border"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <ImageUpload
                value={image}
                onChange={(value) => setCustomValue('image', value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="newPrice">
              <Form.Label>New Price</Form.Label>
              <Form.Control
                value={valueItem?.newPrice}
                onChange={(e) => handleChange(e)}
                name="newPrice"
                autoComplete="false"
                type="number"
                placeholder="Product discount %?"
                className="form-control border"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="oldPrice">
              <Form.Label>Old Price</Form.Label>
              <Form.Control
                value={valueItem?.oldPrice}
                onChange={(e) => handleChange(e)}
                name="oldPrice"
                autoComplete="false"
                type="number"
                placeholder="$price"
                className="form-control border"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="stars">
              <Form.Label>Stars</Form.Label>
              <Form.Control
                value={valueItem?.stars}
                onChange={(e) => handleChange(e)}
                name="stars"
                autoComplete="false"
                type="number"
                placeholder="***"
                className="form-control border"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="comments">
              <Form.Label>Comments</Form.Label>
              <Form.Control
                value={valueItem?.comments}
                onChange={(e) => handleChange(e)}
                name="comments"
                autoComplete="false"
                type="number"
                placeholder="Comments"
                className="form-control border"
              />
            </Form.Group>

            <Form.Group className="my-3  rounded" controlId="fallenPrice">
              <Form.Label>Fallen Price</Form.Label>
              <Form.Select
                value={valueItem?.fallenPrice}
                onChange={(e) => handleChange(e)}
                name="fallenPrice"
                aria-label="Fallen Price"
                autoComplete="false"
                type="text"
                placeholder="Fallen Price"
                className="form-control w-100 "
              >
                <option>Fallen Price</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="newOrOld">
              <Form.Label>New / Old</Form.Label>
              <Form.Control
                value={valueItem?.newOrOld}
                onChange={(e) => handleChange(e)}
                name="newOrOld"
                autoComplete="false"
                type="text"
                placeholder="newOrOld"
                className="form-control border"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                value={valueItem?.category}
                onChange={(e) => handleChange(e)}
                name="category"
                autoComplete="false"
                type="text"
                placeholder="category"
                className="form-control border"
              />
            </Form.Group>
            <Form.Group className="gap-2 mb-3">
              <Button variant="danger" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="success" className="ms-1" type="submit">
                Edit
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default EditProduct
