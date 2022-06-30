import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown';
import { generateMedia } from 'styled-media-query';

class Section extends Component {
  state = {
    langContent: false
  };

  handleToggle = e => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent
    });
  };

  render() {
    return (
      <FooterContainer>
       <h2>Section part</h2>
      </FooterContainer>
    );
  }
}

export default Section;

// Media
const customMedia = generateMedia({
  tablet: '740px'
});

// Main Footer Container
const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #999;

  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    ${customMedia.lessThan('tablet')`
      grid-template-columns: repeat(2, 1fr);
    `}
  }

  ul li {
    list-style: none;
    line-height: 2.5;
  }

  a {
    color: #999;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  // Language Button
  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    cursor: pointer;
  }

  // Toggle Language Content
  .lang-toggle {
    margin-left: 15%;
    position: absolute;
  }

  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    text-align: center;
    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }
`;