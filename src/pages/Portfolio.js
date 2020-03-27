import React from "react";
import Container from "../components/Container/"
import Row from "../components/Row"
import PortfolioPage from "../components/Portfolio"

function Portfolio() {
  return(
    <div>
      <Container>
          <Row>
            <PortfolioPage />
          </Row>
      </Container>
    </div>
  )
}

export default Portfolio