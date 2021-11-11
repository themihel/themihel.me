import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import * as FontAwesome from 'react-icons/fa';
import { device } from '../utils/device';

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
      vertical-align: middle;
      padding: 10px;
      border-radius: 10px;

      box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.50);
      transition: all .3s ease-in-out;

      &:hover {
        box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.50);
      }

      &:active {
        color: var(--primary-dark);
        background-color: var(--primary-light);
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.50);
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
    top: calc(50vh - 100px);
    left: calc(50% - 100px);

    @media ${device.screenMdMin} {
      top: calc(50vh - 200px);
      left: calc(50% - 150px);
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 200px;
      border: 10px solid var(--primary-light);;

      @media ${device.screenMdMin} {
        width: 300px;
        height: 300px;
        border-radius: 300px;
        border: 20px solid var(--primary-light);;
      }


      box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.50);
      transition: all .3s ease-in-out;

      &:hover {
        box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.50);
      }
    }
  }
`;

export default function ProfileBanner() {
  const { socialLinks } = useStaticQuery(graphql`
    query {
      socialLinks: allSanitySocialLinks(filter: {visible: {eq: true}}) {
        nodes {
          id
          name
          url
          icon
        }
      }
    }
  `);

  return (
    <ProfileBannerStyles>
      <div className="profileLinks">
        {socialLinks.nodes.map((socialLink) => {
          const DynamicIcon = React.createElement(FontAwesome[socialLink.icon]);

          return (
            <a key={socialLink.id} target="_blank" rel="noopener noreferrer" href={socialLink.url} aria-label={socialLink.name}>
              {DynamicIcon}
            </a>
          );
        })}
      </div>
      <div className="profilePhoto">
        <picture>
          <source srcSet="/profilePhoto.webp" type="image/webp" />
          <source srcSet="/profilePhoto.jpeg" type="image/jpeg" />
          <img src="/profilePhoto.jpeg" alt="Mischa Helfenstein" />
        </picture>
      </div>
      <div className="profileText">
        <h1>Mischa Helfenstein</h1>
        <h2>Student | Developer</h2>
      </div>
    </ProfileBannerStyles>
  );
}
