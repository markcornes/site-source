import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css'
import {fetchData} from './index.jsx'


function MakeImage(url) {
    return (
        <div className="ArticleImageBox">
            <img src={url} alt="image" width="500" className="ArticleImage" onClick={null}/>
        </div>
    );
}

function JSONToArticle(props) {
    const json = props.json

    function MakeParagraphs() {
        const body_text = [];
        for(let n = 0; n < json.paragraphs.length; n++) {
            body_text.push(<p className="ArticleParagraph">{json.paragraphs[n]}</p>);
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

function Article(props) {
    const title = props.title;
    const [articlesJSON, setArticlesJSON] = useState([]);
    console.log(title);
    
    useEffect(() => {
        fetchData(articlesJSON, setArticlesJSON);
    }, []);

    return(
        <div className='HomePage'>
            {
                articlesJSON.map(items => (items.article_name==title ? <JSONToArticle json={items}/> : ""))
            }
        </div>
    );
}

export default Article;