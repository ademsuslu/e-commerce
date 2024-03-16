'use client'
import React from 'react'
import { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import ImageUpload from '../../../../components/ImageUpload/ImageUpload'
import { CreateProducts } from '../../../../action'
const AdminCreate = () => {
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
  const { register, handleSubmit, watch, formState, reset, setValue } = form
  const image = watch('image')
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      discount: Number(data.discount),
      newPrice: Number(data.newPrice),
      oldPrice: Number(data.oldPrice),
      stars: Number(data.stars),
      comments: Number(data.comments),
      fallenPrice: Boolean(data.fallenPrice),
    }

    const res = await CreateProducts(newData)
    handleClose()
    reset() // formu yolladıkdan sonra formdaki verileri siliyor
    window.location.reload()
    return res
  }

  const setCustomValue = (id, value) => {
    setValue(id, value)
  }
  return (
    <>
      <Button
        style={{ whiteSpace: 'nowrap !important' }}
        variant="secondary"
        className="btn-sm"
        onClick={handleShow}
      >
        Add product
      </Button>
      <Modal className="bg-secondary" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Product name is Required',
                  },
                })}
                autoComplete="false"
                type="text"
                placeholder="Product Name"
                className="form-control border"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="discount">
              <Form.Label>Discount</Form.Label>
              <Form.Control
                {...register('discount')}
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
                {...register('newPrice', {
                  required: {
                    value: true,
                    message: 'Product Price is Required',
                  },
                })}
                autoComplete="false"
                type="number"
                placeholder="$price"
                className="form-control border"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="oldPrice">
              <Form.Label>Old Price</Form.Label>
              <Form.Control
                {...register('oldPrice')}
                autoComplete="false"
                type="number"
                placeholder="$price"
                className="form-control border"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="stars">
              <Form.Label>Stars</Form.Label>
              <Form.Control
                {...register('stars')}
                autoComplete="false"
                type="number"
                placeholder="***"
                className="form-control border"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="comments">
              <Form.Label>Comments</Form.Label>
              <Form.Control
                {...register('comments')}
                autoComplete="false"
                type="number"
                placeholder="Comments"
                className="form-control border"
              />
            </Form.Group>

            <Form.Group className="my-3 border rounded" controlId="fallenPrice">
              <Form.Select
                {...register('fallenPrice')}
                aria-label="Fallen Price"
                autoComplete="false"
                type="text"
                placeholder="Fallen Price"
                className="form-control w-100 "
              >
                <option value={true}>Fallen Price</option>
                <option value={true}>True</option>
                <option value={false}>False</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="newOrOld">
              <Form.Label>New / Old</Form.Label>
              <Form.Control
                {...register('newOrOld')}
                autoComplete="false"
                type="text"
                placeholder="newOrOld"
                className="form-control border"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                {...register('category')}
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
                Create
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AdminCreate
