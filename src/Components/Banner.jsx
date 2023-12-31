import React from 'react';
import styled from 'styled-components';
import Search from './Search';

const Container = styled.div`
  /* border: 1px solid red; */
  width: 98vw;
  height: calc(70vh - 150px);
  position: relative;
  margin: 0 auto 30px;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  object-fit: fill;
`;
const Wrapper = styled.div`
  background-color: #494848;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
  top: 0;
`;
const Info = styled.div`
  width: 50vw;
  margin: auto;
  margin-top: 70px;
`;
const InfoText = styled.div``;
const H3 = styled.h3`
  font-size: 35px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
`;
const P = styled.p`
  color: #ffffff;
  line-height: 30px;
  margin-bottom: 10px;
`;
const Span = styled.span`
  color: #ffff;
  font-size: 12px;
`;
const InfoSearch = styled.div``;

const Banner = ({ searchquery }) => {
  return (
    <Container>
      <BannerImg src="https://images.unsplash.com/photo-1657805052690-7ddc57695d90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=1&auto=format%2Ccompress&fit=crop" />
      <Wrapper>
        <Info>
          <InfoText>
            <H3>Unsplash</H3>
            <P>
              The internet's source of freely-usable images.
              <br />
              Powered by creators everywhere.
            </P>
          </InfoText>
          <InfoSearch>
            <Search searchquery={searchquery} />
          </InfoSearch>
          <br />
          <Span>Trending: flower wallpapers backgrounds happy love</Span>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Banner;
