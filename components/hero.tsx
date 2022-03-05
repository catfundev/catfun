import React from 'react';
import Image from 'next/image'
import HeroImage from '../assets/hero.jpeg'
import styled from "@emotion/styled";
import Button from "./button";
import {imageLoader} from "../services/loader"

const HeroImageStyled = styled(Image)`
  background-size: cover;
`

const Section = styled.section`
  //margin-top: 10px;
  background-color: #5363FF;
  position: relative;
  overflow: clip;
`

const MyButton = styled(Button)`
  position: absolute;
  display: flex;
  bottom: 1%;
  right: 0;
  z-index: 10;
  color: whitesmoke;
  font-size: 1.8rem;
  width: 40%;
  height: 2.4em;
  transition: transform .3s;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;

  & > span > img {
      width: 100%;
      height: 100%;
  }

  @media (max-width: 800px) {
    padding: 0;
    font-size: 1.2rem;

    & > span {
      margin: 0;
      img {
        width: 80%;
        height: 80%;
      }
    }
  }

  &:hover {
    background-color: #3748f5;
    transform: translateY(-0.2rem);
  }
`

function Hero() {
    return (
        <Section>
            <HeroImageStyled loader={imageLoader} alt={"Hero Image"} src={HeroImage}/>
            <MyButton backColor={"#5363FF"} href={'https://linktr.ee/CATFUN'} endIcon={<img alt={'logo'} src={'/favicon.ico'}/>}>Join
                Now</MyButton>
        </Section>
    );
}

export default Hero;
