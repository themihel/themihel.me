import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { device } from '../utils/device';
import Button from './Button';
import Logo from '../assets/logo/logo.svg';

const ProfileBannerStyles = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: var(--primary-light);
  background-image: -webkit-linear-gradient(20deg, var(--primary-dark) 50%, var(--primary-light) 50%);
  background-size: 130% 130%;
  background-position-x: 30%;
  animation: degrees 7s 1;


  .logo {
    position: absolute;
    left: 20px;
    top: 20px;

    width: 30px;
    fill: var(--primary-light);
    transition: all .3s ease-in-out;

    @media ${device.screenMdMin} {
      width: 40px;
    }

    &:hover {
      #top-left {
        animation: changecolor 3s infinite .2s;
      }

      #top-middle {
        animation: changecolor 5s infinite 1s;
      }

      #top-right {
        animation: changecolor 1.3s infinite .8s;
      }

      #middle-left {
        animation: changecolor 2s infinite .1s;
      }

      #middle-middle {
        animation: changecolor 1s infinite .7s;
      }

      #middle-right {
        animation: changecolor .8s infinite 2s;
      }

      #bottom-left {
        animation: changecolor 1.3s infinite;
      }

      #bottom-right {
        animation: changecolor .7s infinite .8s;
      }
    }
  }

  @keyframes changecolor {
   from {
     fill: var(--primary-light);
    }
   to {
    fill: var(--primary-dark);
    }
  }

  @keyframes degrees {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    70% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 30% 0%;
    }
  }

  .profileLinks {
    position: absolute;
    right: 20px;
    top: 20px;

    @media ${device.screenMdMin} {
      right: 40px;
      top: 40px;
    }
    
  }

  .profileText {
    position: absolute;
    color: var(--primary-light);

    left: 20px;
    bottom: 20px;

    @media ${device.screenMdMin} {
      left: 40px;
      bottom: 40px;
    }
  }

  .profilePhoto {
    position: absolute;
    top: calc(50vh - 150px);
    left: calc(50% - 120px);

    @media ${device.screenMdMin} {
      top: calc(50vh - 200px);
      left: calc(50% - 150px);
    }

    .gatsbyImage {
      width: 200px;
      height: 200px;
      border: 20px solid var(--primary-light);
      border-radius: 100%;

      @media ${device.screenMdMin} {
        width: 300px;
        height: 300px;
      }

      box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.50);
      transition: all .3s ease-in-out;

      &:hover {
        box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.50);
      }
    }

    img.gatsbyImage {
      border: none;
    }
  }
`;

export default function ProfileBanner() {
  const { socialLinks, profileImages } = useStaticQuery(graphql`
    query {
      socialLinks: allSanitySocialLinks(filter: {visible: {eq: true}}) {
        nodes {
          id
          name
          url
          icon
        }
      },
      profileImages: allFile(filter: {name: {eq: "profilePhoto"}}) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
      }
    }
  `);
  const profileImage = profileImages.nodes[0];

  return (
    <ProfileBannerStyles>
      <Logo className="logo" />
      <div className="profileLinks">
        {socialLinks.nodes.map((socialLink) => (
          <Button key={socialLink.id} target="_blank" rel="noopener noreferrer" href={socialLink.url} aria-label={socialLink.name}>
            {socialLink.name}
          </Button>
        ))}
      </div>
      <div className="profilePhoto">
        <GatsbyImage
          className="gatsbyImage"
          image={profileImage.childImageSharp.gatsbyImageData}
          alt="Mischa Helfenstein"
        />
      </div>
      <div className="profileText">
        <h1>Mischa Helfenstein</h1>
        <h2>Student | Developer</h2>
      </div>
    </ProfileBannerStyles>
  );
}
