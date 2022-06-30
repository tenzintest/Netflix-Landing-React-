import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown';
import { generateMedia } from 'styled-media-query';
import Tv from '../images/tv.png';
import Tv2 from '../images/tv2.jpg';
import Tv3 from '../images/device-pile.png';

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
       <div style={{ 
                display: 'flex', 
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                padding: 10,
                borderTop: '5px solid #333',
                borderBottom: '5px solid #333',
                position: 'relative',
                top: -80,
                paddingBottom: 80,
                paddingTop: 30,
                }}>
            <div style={{
                position: 'relative',
                top: 150            
            }}>
                <h1 style={{
                    fontSize: 60,
                    color: 'white',
                    fontWeight: '700',
                    letterSpacing: 2
                }}>Enjoy on your TV</h1>
                <p 
                style={{
                    fontSize: 25,
                    color: 'white',
                    fontWeight: '300',
                    position: 'relative',
                    top: 15,
                    letterSpacing: 2,
                    lineHeight: 1.5
                }}>Watch on Smart TVs, Playstation, Xbox, <br/> Chromecast, 
                    Apple TV, Blu-ray players, and <br/> more.
                </p>
            </div>
            <div>
                <img 
                    src={Tv}
                    alt="tv"
                    style={{

                    }}
                    />
            </div>
       </div>

       <div style={{ 
                display: 'flex', 
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                padding: 20,
                borderBottom: '5px solid #333',
                paddingBottom: 40
                }}>
            <div style={{
                position: 'relative',
                top: 130
            }}>
                <img 
                    src={Tv2}
                    alt="tv"
                    style={{
                        position: 'relative',
                        bottom: '35%'
                    }}
                    />
            </div>
            <div>
            <h1 style={{
                    fontSize: 60,
                    color: 'white',
                    fontWeight: '700',
                    letterSpacing: 2
                }}>Download your shows <br/>to watch offline.</h1>
                <p 
                style={{
                    fontSize: 25,
                    color: 'white',
                    fontWeight: '300',
                    position: 'relative',
                    top: 15,
                    letterSpacing: 2,
                    lineHeight: 1.5
                }}>Stream unlimited movies and TV shows on <br/>your phone, tablet, laptop, and TV without
                <br/> paying more.
                </p>
            </div>
       </div>
       <div style={{ 
                display: 'flex', 
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                padding: 20,
                position: 'relative',
                bottom: -50,
                borderBottom: '5px solid #333',
                paddingBottom: 40
                }}>
            <div style={{
                position: 'relative',
                top: 130
            }}>
                <h1 style={{
                    fontSize: 60,
                    color: 'white',
                    fontWeight: '700',
                    letterSpacing: 2
                }}>Watch everywhere.</h1>
                <p 
                style={{
                    fontSize: 25,
                    color: 'white',
                    fontWeight: '300',
                    position: 'relative',
                    top: 15,
                    letterSpacing: 2,
                    lineHeight: 1.5
                }}>Stream unlimited movies and TV shows on <br/> your phone, tablet, laptop, and TV without <br/>
                 paying more.
                </p>
            </div>
            <div>
                
                <img 
                    src={Tv3}
                    alt="tv"
                    style={{

                    }}
                    />
            </div>
       </div>
      </FooterContainer>
    );
  }
}

export default Section;

// Media
const customMedia = generateMedia({
  tablet: '740px'
});

//Section

// Main Footer Container
const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  padding-top: 5rem;
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