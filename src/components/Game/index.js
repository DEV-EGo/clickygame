import React, { Component } from "react";
import Card from "../Card";
import cardData from "../../Fighter.json";
import Nav from "../Navbar";
import Jumbotron from "../Jumbotron";
import "./style.scss";

class Game extends Component {
    state = {
        score: 0,
        highScore: 0,
        cardData,
        clickedList: []
    }
    componentDidMount() {
        const { cardData } = this.state;
        this.RandomizeCards(cardData);
    }
    HandleClick = (id) => {
        const { score, clickedList, cardData, highScore } = this.state;
        this.RandomizeCards(cardData)
        const clickedOn = clickedList.includes(id);
        if (clickedOn) {
            const bestScore = Math.max(score, highScore)
            this.resetGame(bestScore);
        } else {
            const newscore = score + 1;
            this.setState({
                score: score + 1,
                clickedList: [...clickedList, id]
            })
            if (newscore === cardData.length)
                this.resetGame(newscore);
        }
    }
}