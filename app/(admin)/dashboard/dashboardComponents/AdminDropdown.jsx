'use client'
import { Dropdown } from 'react-bootstrap'
const AdminDropdown = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
          More Actions
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default AdminDropdown
