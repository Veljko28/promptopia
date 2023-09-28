'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({data, handleTagClick}: {data: any, handleTagClick: any}) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post: Post) => 
        <PromptCard key={post._id} 
        post={post} 
        handleTagClick={handleTagClick}/>
      )}
    </div>
  )
}



const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState<Post[]>([])

  const handleSearchChange = (e: ChangeEvent) => {

  } 

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/prompt');
      const data = await res.json();

      setPosts(data);
    }


    fetchPosts();
  }, [])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input type="text" placeholder='Search for a tag or username'
        value={searchText} onChange={(e) => handleSearchChange(e)} required
        className="search_input peer"/>
      </form>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  )
}

export default Feed