import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Card from './Card';


const styles = makeStyles({
    board:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr',
        height: '75%',
        gridGap: '3em',
        width: '75%',
        alignItems: 'center',
        margin: '150px',
        padding: '20px'
        
    }
})

export default function Board(props) {
    const classes = styles();

    return (
        <div className={classes.board}>
        {props.boardList.map((card, index) => 
                <div onClick={() => props.onSelection(index)} key={index}>

                        <Card emoji ={(props.checkList.includes(index)|| props.matchedList.includes(index) ? card : ' ') } 
                        onClick={props.onClick}
                        />
                </div>
            )}   
        </div>
    )
}

Board.propTypes = {
    boardList: PropTypes.array,
    onSelection: PropTypes.func,
    checkList: PropTypes.array,
    matchedList: PropTypes.array,
    onClick: PropTypes.func
};