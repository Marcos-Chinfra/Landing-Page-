import React from 'react'
import data from "../../data-coment.json"
import "../styles/blog.scss"

const Blog = () => {
    return (
        <div className='comment_container'>
            <h1>Blog</h1>
            <div className='comment_container-comments'>
            {data.map( item => {
            return(
                <div key={item.id} className="comment_container-comment">
                    <div>
                        <img src={item.img}/>
                        <span>{item.id}</span>
                    </div>
                    <p>
                        {item.coment}
                    </p>
                </div>
            )
            })}
            </div>
        </div>
    );
}

export default Blog;