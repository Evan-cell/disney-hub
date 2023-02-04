import React from 'react'
import styled from 'styled-components'
function Recommendations() {
  return (
    <Container>
        <h4>Recommened for you</h4>
        <Content>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </Content>
    </Container>
  )
}
const Container = styled.div`
padding-left: 0,0,26px;
`
const Content = styled.div``

export default Recommendations