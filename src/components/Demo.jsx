import { useEffect, useState } from "react"

import { copy, linkIcon, loader, tick } from "../assets"

const Demo = () => {

  const [article, setArticle] = useState({
    url : "",
    summary : ""
  });

  const handleSubmit = async (e) => {

  }

  return (
    <section className='mt-16 w-full max-w-xl'>
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex justify-center items-center"
        onSubmit={() =>{}}
        >
          <img src={linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5"/>
          <input type="url" placeholder="Enter a URL" value={article.url} onChange={(e) => {setArticle({...article, url : e.target.value})}} required />
          <button type="submit" className="submit-btn"></button>
        </form>

      </div>
      </section>
  )
}

export default Demo
