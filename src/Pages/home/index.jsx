import "./index.css";
import { useState, useEffect, useRef } from "react";
import { FaStrava, FaInstagram, FaYoutube, FaGithub, FaEnvelope, FaAt, FaTelegramPlane } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { NavLink } from "react-router-dom";

// const title_text = "mark cornes"
const title_text = "...hello there, visitor!"
export const article_titles = ["welcome", "website"]
let i = 0;

function TypewriterEffect() {
    if (i < title_text.length) {
        document.getElementById("TypedText").innerHTML += title_text.charAt(i);
        i++;
        setTimeout(TypewriterEffect, 100);
    }
}

function MakeTitle() {
    const [typed, setTyped] = useState(false);
    return (
        <div className="HomeTitleContainer"
        onClick={() => {if(!typed) {TypewriterEffect()};
        setTyped(true);
        }}
        >
            <div className="HomeTitle">
                <h1>...mark cornes...</h1>
            </div>
            <div className="Links">
                <a href='https://github.com/markcornes'><FaGithub size={30} className="LinksItem GithubIcon"/></a>
                <a href='https://www.youtube.com/@MarkCornes'><FaYoutube size={30} className="LinksItem YTIcon"/></a>
                <a href='https://www.instagram.com/mark._.cornes/'><FaInstagram size={30} className="LinksItem InstaIcon"/></a>
                <a href='https://www.strava.com/athletes/122838370'><FaStrava size={30} className="LinksItem StravaIcon"/></a>
                <a href='mailto:cornes.mark@gmail.com'><AiOutlineMail size={30} className="LinksItem MailIcon" /></a>
            </div>
            <div className="SubTitle" id="TypedText">&gt;&gt;&nbsp;</div>
        </div>
    );
}

export function TitleToURL(title_text) {
    return(title_text.toLowerCase().replaceAll(' ', '-'));
}

function JSONToAbbrev(props) {
    const json = props.json;
    const nav_name = "/" + TitleToURL(props.json.article_name);

    return (
        <NavLink to={nav_name}>
        <div className="Article">
            <h3>{json.title}</h3>
            <div className="AbbrevText">{json["paragraphs"] && json.paragraphs[0]}..</div>
            <br/><br/><div className="BottomAbbrevText">...click to read more</div>
        </div>
        </NavLink>
    );
}

export const fetchData = async (state, state_function) => {
    for (let j = 0; j < article_titles.length; j++){
        fetch('./articles/' + article_titles[j] + '.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            state_function(state => [...state, json]);
        });
    }
}

function Home() {
    const [articlesJSON, setArticlesJSON] = useState([]);

    useEffect(() => {
        fetchData(articlesJSON, setArticlesJSON);
    }, []);

    return (
        <div className="HomePage">
            {MakeTitle()}
            {
                articlesJSON.map(items => <JSONToAbbrev json={items}/>)
            }
        </div>
    );
}

export default Home;