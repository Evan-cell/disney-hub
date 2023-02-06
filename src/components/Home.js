import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommendations from './Recommendations'
import Trending from './Trending'
import Viewers from './Viewers'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import db from '../Firebase'
import { setMovies } from '../features/movies/MovieSlice'
import { selectUserName } from '../features/user/UserSlice'
function Home(props) {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName)
  let recommend = [];
  let newDisney = [];
  let original = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommend);
        switch (doc.data().type) {
          case "recommend":
            recommend = [...recommend, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            original = [...original, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommend,
          newDisney: newDisney,
          original: original,
          trending: trending,
        })
      );
    });
  }, [userName]);
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