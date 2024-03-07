import { Button } from 'react-bootstrap'

export default function BtnDanger({ text, setShowAll, showAll }) {
  const handleClick = () => {
    setShowAll((prev) => !prev)
  }
  return (
    <Button onClick={handleClick} className="btn btn-danger ">
      {showAll ? 'View Less Products' : text}
    </Button>
  )
}
