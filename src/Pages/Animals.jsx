import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Heading from '../Components/Heading';
import HeadingSideCard from '../Components/HeadingSideCard';
import { v4 as uuid } from 'uuid';
import PhotoCard from '../Components/PhotoCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetch } from '../Redux/photo/action';

const Container = styled.div``;
const ImageDiv = styled.div`
  width: 70vw;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  object-fit: cover;
`;

const Header = styled.div`
  display: flex;
  width: 70vw;
  margin: 30px auto;
`;

const Animals = () => {
  const [query, setQuery] = useState({
    query: 'animals',
    page: 1,
    per_page: 30,
  });
  const dispatch = useDispatch();
  const data = useSelector(store => store.photos.data);

  useEffect(() => {
    dispatch(fetch(query));
  }, [query.query]);

  return (
    <Container>
      <Navbar
        searchquery={e => setQuery({ ...query, query: e.target.value })}
      />

      <Header>
        <Heading
          heading="Animals"
          para="Exotic wildlife, pet kittens — and everything in between. Uncover the beauty of the animal kingdom through your screen."
        />
        <HeadingSideCard />
      </Header>

      <ImageDiv>
        {data?.map(item => (
          <PhotoCard key={uuid()} item={item} />
        ))}
      </ImageDiv>
    </Container>
  );
};

export default Animals;
