"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile';

const ProfilePage = () => {

    const router = useRouter();
    const {data: session} = useSession();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
   
        const fetchPosts = async () => {
          const res = await fetch(`/api/users/${(session as any).user.id}/posts`);
          const data = await res.json();
    
          if ((session as any).user.id) setPosts(data);
        }
    
    
        fetchPosts();
      }, [])

    const handleEdit = (post: Post) => {
      router.push(`update-prompt?id=${post._id}`)

    }
    const handleDelete = async (post: Post) => {
      const hasConfirmed = confirm("Are you sure you want to delete this prompt?");

      if (hasConfirmed){
        try {
            await fetch(`/api/prompt/${post._id?.toString()}`),
            {
              method: "DELETE"
            }

            const filteredPosts = posts.filter((p: Post) => p._id !== post._id);
            setPosts(filteredPosts);
          }
        catch (err){
          console.error(err);
        }
      }
    }

  return (
    <Profile
        name="My"
        desc="Welcome to your profile"
        data={[]}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default ProfilePage