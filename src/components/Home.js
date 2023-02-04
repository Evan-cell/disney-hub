import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommendations from './Recommendations'
import Trending from './Trending'
import Viewers from './Viewers'
function Home(props) {
  return (
    <Container>
        <ImageSlider />
        <Viewers />
        <Recommendations />
        <NewDisney />
        <Originals />
        <Trending />
    </Container>
  )
}
const Container = styled.main`
position: relative;
background: url('/images/home-background.png');
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);

&:after{
    background: url('/images/home-background.png') center center no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;

}

`
export default Home