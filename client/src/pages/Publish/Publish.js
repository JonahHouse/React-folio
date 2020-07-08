import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ElementAPI from '../../utils/ElementAPI';
import UserTextBox from '../../components/UserTextBox';
import ElementContext from '../../utils/ElementContext';
import Button from '@material-ui/core/Button';
import UserNav from '../../components/UserNav'
import UserBtn from '../../components/UserBtn'
import UserHero from '../../components/UserHero'
import UserFooter from '../../components/UserFooter'
import UserCard from '../../components/UserCard'
import ScrollAnimation from 'react-animate-on-scroll';
import './publish.css'

const useStyles = makeStyles((theme) => ({

}))

const { getElements, getElementsByUserId, createElement, updateElement, deleteElement } = ElementAPI

const Publish = () => {
  const classes = useStyles()

  const [elementState, setElementState] = useState({
    elements: [],
    type: '',
    attributes: {}
  })

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    getElementsByUserId(id)
      .then(({ data }) => {
        setElementState({ ...elementState, elements: data.elements })
      })
      .catch((err) => console.error(err))
  }, [])

  const elementArray = (elementState.elements) ? elementState.elements : []
  let navbars = elementArray.filter(element => element.type === 'navbar')
  let footers = elementArray.filter(element => element.type === 'footer')
  let footer = footers[footers.length - 1]
  let heros = elementArray.filter(element => element.type === 'hero')
  let hero = heros[heros.length - 1]
  const navbar = navbars[navbars.length - 1]
  let buttons = elementArray.filter(element => element.type === 'button')
  const cards = elementArray.filter(element => element.type === 'card')

  return (
    <ElementContext.Provider value={elementState}>
      <div className="userpage">
        <div className="user-nav">
          {
            (navbar) ?
              <UserNav
                siteTitle={navbar.attributes.siteTitle}
                instagram={navbar.attributes.instagram}
                linkedin={navbar.attributes.linkedin}
                github={navbar.attributes.github}
              ></UserNav>
              : null
          }
        </div>

        <div className="user-hero">
          {
            (hero) ? <UserHero
              heroTitle={hero.attributes.heroTitle} heroParagraph={hero.attributes.heroParagraph}
              heroBtn1={hero.attributes.heroBtn1}
              heroBtn2={hero.attributes.heroBtn2}
              backgroundImage={hero.attributes.backgroundImage}>
            </UserHero> : null
          }
        </div>

        <div className="user-body">
          <ScrollAnimation animateIn="fadeIn">
            <Box display="flex" flexDirection="row" justifyContent="center">
              {
                cards.map((card, index) => {
                  return <div style={{ margin: "20px" }}>
                    <UserCard
                      cardTitle={card.attributes.cardTitle}
                      cardBody={card.attributes.cardBody}
                      cardImage={card.attributes.cardImage}
                      cardButtonLink={card.attributes.cardButtonLink}
                      cardButtonText={card.attributes.cardButtonText}
                      key={index}>
                    </UserCard>
                  </div>
                })
              }
            </Box>
          </ScrollAnimation>
        </div>

        <div className="user-footer">
          {
            (footer) ?
              <UserFooter
                siteTitle={footer.attributes.siteTitle}
              ></UserFooter>
              : null
          }
        </div>
      </div>

    </ElementContext.Provider >
  )
}

export default Publish;
