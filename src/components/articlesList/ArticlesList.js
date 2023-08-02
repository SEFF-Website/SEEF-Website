import React, { useEffect, useState } from 'react'
import AritclesItem from './AritclesItem';
import  './aricleItem.css'




const ArticlesList = () => {
    const [article, setArticles] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8000/category")
        .then(res => res.json())
        .then(result => setArticles(result))
        .catch(console.log);
    }, [])
console.log(article)
    
  return (
    // articles list
    <div className='--home-articles-list-section pt-5'>
      <div className='container --home-articles-list-container mt-5'>
        <div className='row --home-articles-list-row'>
          {/* import aritcle item component */}
        {
            article.map((item, i) => <AritclesItem key={i} item={item} />)
        }
         {/* import aritcle item component */}
        </div>
      </div>
    </div>
    // articles list
  )
}

export default ArticlesList