import "./index.css";
import { useState, useEffect, useRef } from "react";
import { SocialIcon } from 'react-social-icons';
import { FaStrava, FaInstagram, FaYoutube, FaGithub, FaGithubAlt, FaGithubSquare } from 'react-icons/fa';

// const title_text = "mark cornes"
const title_text = "...hello there, visitor!"
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
            </div>
            <div className="SubTitle" id="TypedText">&gt;&gt;&nbsp;</div>
        </div>
    );
}

function MakeArticle(title, content) {
    return (
        <div className="Article">
            <h2>{title}</h2>
            {content}
        </div>
    );
}

function MakeImage(url) {
    return (
        <div className="ArticleImageBox">
            <img src={url} alt="image" width="500" className="ArticleImage" onClick={null}/>
        </div>
    );
}

function JSONToArticle(json) {

    function MakeParagraphs() {
        const body_text = [];
        for(let n = 0; n < json.paragraphs.length; n++) {
            body_text.push(<p>{json.paragraphs[n]}</p>);
        }
        return body_text;
    }

    function MakeImages() {
        const images = [];
        for(let n = 0; n < json.images.length; n++) {
            images.push(MakeImage(json.images[n]));
        }
        return images;
    }
    
    return (
        <div className="Article">
            <h2>{json.title}</h2>
            {json["paragraphs"] && MakeParagraphs()}
            {json["images"] && MakeImages()}
        </div>
    );
}

function Home() {
    const [articlesJSON, setArticlesJSON] = useState([]);
    const article_titles = ["welcome.json", "article2.json"]

    const fetchData = async () => {
        for (let j = 0; j < article_titles.length; j++){
            console.log(article_titles[j]);
            fetch('./articles/' + article_titles[j])
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                setArticlesJSON(articlesJSON => [...articlesJSON, json]);
            });
        }
    }

    useEffect(() => {
        fetchData();
        console.log("used effect");
    }, []);

    return (
        <div className="HomePage">
            {MakeTitle()}
            {
                articlesJSON.map(items => JSONToArticle(items))
            }
        </div>
    );
}

export default Home;