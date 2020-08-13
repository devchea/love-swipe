import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        position: 'relative',
        width: '65vw',
        maxWidth: '70vw',
        height: '55vh',
        maxHeight: '70vw',
        padding: '20px',
        borderRadius: '20px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '3px 10px 9px -4px #8a8a8a'
    },
    card__h3: {
        position: 'absolute',
        bottom: '10px',
        left: '15px',
        color: 'white',
        padding:'5px',
        margin: '10px',
        backgroundColor: 'black',
        borderRadius: '20px'
    },
    cardHeading: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5vh'
    },
    swipe: {
        position: 'absolute'
    }
}));

const TinderCards = () => {
    const classes = useStyles();
    const [people, setPeople] = useState([])

    useEffect(() => {
        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot => 
                setPeople(snapshot.docs.map(doc =>  doc.data()))
            );
            
            return() => {
                unsubscribe();
            }

    }, []);
    
    return (
        
        <div>
            <div className={classes.cardHeading}>
                <ArrowBackIosRoundedIcon/>
                <h1> Swipe Left or Right </h1> 
                <ArrowForwardIosRoundedIcon/>
            </div>
            <div className={classes.cardContainer}>
                {people.map((person, index) => (
                <TinderCard
                    className={classes.swipe}
                    key={index}
                    preventSwipe={['up', 'down']}
                >
                    <div
                        style={{ backgroundImage:`url(${person.url}) `}}
                        className={classes.card}
                    >
                    </div>
                <h3 className={classes.card__h3}>{person.name}</h3>
                </TinderCard>
                ))}
            </div>
        </div>
    );
}


export default TinderCards