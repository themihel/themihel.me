import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { device } from '../utils/device';
import Button from './Button';

const ProfileBannerStyles = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: var(--primary-light);
  background-image: -webkit-linear-gradient(30deg, var(--primary-dark) 50%, var(--primary-light) 50%);

  .profileLinks {
    position: absolute;
    right: 20px;
    top: 20px;

    @media ${device.screenMdMin} {
      right: 40px;
      top: 40px;
    }

    svg {
      color: var(--primary-light);
      background-color: var(--primary-dark);
      font-size: 30px;
      margin-right: 10px;
      padding: 10px;
      text-decoration: none;
      vertical-align: middle;
      cursor: pointer;
      
      box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.50);
      transition: all .3s ease-in-out;

      border: 1px solid var(--primary-dark);
      border-radius: 10px;

      &:hover {
        box-shadow: none;
      }

      &:active {
        color: var(--primary-dark);
        background-color: var(--primary-light);
        border-style: dashed;
        box-shadow: none;
      }
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
