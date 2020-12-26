import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme, { theme } from "../utils/Theme";
import { Button } from "rebass";
import { Link } from "gatsby";
import FadeInSection from '../utils/FadeInSection';

const ImageContainer = styled.div`
  width: 100%;
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 48px 32px;

  @media (min-width: 1024px) {
    padding: 56px 32px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1440px;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  height: 100%;

  @media (min-width: 600px) {
    flex-basis: calc(50%);
    justify-content: space-between;
    flex-direction: row;
  }
`;

const TeaserTextContainer = styled.div`
  margin: 0 48px 0 0;

  h1 {
    color: ${(props) => props.theme.colors.black};
  }

  p {
    color: ${(props) => props.theme.colors.blackMedium};
  }

  @media (min-width: 720px) {
    h1 {
      font-size: 42px;
    }
    p {
      font-size: 20px;
    }
  }


  @media (min-width: 1440px) {
    h1 {
      font-size: 56px;
    }
    p {
      font-size: 24px;
    }
  }

`;

const Drawer = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    datoCmsHome {
      heroImage {
        fluid(sizes: "(max-width: 599px) 85vw, (max-width: 719px) 70vw, (max-width: 839px) 60vw, (max-width: 1440) 50vw, 600px", imgixParams: { fm: "png", auto: "compress", fit:"crop", q:50, ar: "1:1" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      teaser
      teaserDescription
      buttonText
    }
  }
`)

  return (
    <Theme>
      <Background>
        <FadeInSection>
          <ContentContainer>
            <TeaserTextContainer>
              <h1>{data.datoCmsHome.teaser}</h1>
              <p>{data.datoCmsHome.teaserDescription}</p>
              <Link to="/contact/">
                <Button
                  sx={{
                    width: "100%",
                    color: `${theme.colors.white}`,
                    maxWidth: "250px",
                    backgroundColor: `${theme.colors.primary}`,
                    cursor: "pointer",
                    transition: 'all 0.3s ease',
                    transform: "none",
                    '&:hover': {
                      transform: 'scale(1.15)'
                    },
                  }}
                  mt={24}
                  p={16}
                  aria-label={data.datoCmsHome.buttonText}
                >
                  {data.datoCmsHome.buttonText}
                </Button>
              </Link>
            </TeaserTextContainer>
            <ImageContainer>
              <Img fluid={data.datoCmsHome.heroImage.fluid} />
            </ImageContainer>
          </ContentContainer>
        </FadeInSection>
      </Background>
    </Theme >
  )
}

export default Drawer;
