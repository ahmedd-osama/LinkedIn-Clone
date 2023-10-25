import {Container} from 'react-bootstrap'

const Section = ({children, className, fluid}) => {
  return (
    <section className={`py-5 ${className && className}`}>
      <Container fluid={fluid || false}>
      {children}
      </Container>
    </section>
  )
}

export default Section