import React from "react";
import "./App.css";
import {card} from "react-bootstrap"

const card =() =>{
    const cardInfo[
        {image: "https://s2.glbimg.com/18qI_XAIg3-7Ujw_NK-R4FJYrnQ=/smart/e.glbimg.com/og/ed/f/original/2019/06/25/gettyimages-1133349278.jpg" ,Title:"Lobron James",text:"he good"},
        {image: "https://d.newsweek.com/en/full/1291410/james-harden-houston-rockets.jpg" ,Title: "James Harden",text: "he good"},
        {image: "https://www.hoopsrumors.com/files/2015/05/USATSI_8533198.jpg" ,Title: "Steph Curry" ,text:"he good"},
    ];
const renderCard = (card, index) => {
    return(
<Card style={{ width: '18rem' }} Key={index}>
      <Card.Img variant="top" src="holder.js/100px180" scr={card.image} />
      <Card.Body>
        <Card.Title>{Card.Title}</Card.Title>
        <Card.Text>
          {card.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
}

    return<div className="App">
 {cardInfo.map(renderCard)}
    </div>;
};

export default card