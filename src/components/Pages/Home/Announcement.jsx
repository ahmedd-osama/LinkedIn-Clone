import { Link } from "react-router-dom"

const Announcement = () => {
  return (
    <div className='d-flex justify-content-center text-underline flex-wrap ' style={{marginTop: '100px'}}>
      <h6 style={{whiteSpace: 'nowrap'}}> <Link to='/home' style={{textDecoration: 'underline', color: 'var(--primary)'}}>Hiring in a hurry? -</Link> </h6>
      <h6 style={{textWrap: 'balance', textAlign: 'center'}}>Find talanted pros in record time with Upwork and keep business moving.</h6>
    </div>
  )
}

export default Announcement