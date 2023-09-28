"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile';

const ProfilePage = () => {

    useEffect(() => {
       const {data: session} = useSession();
       const [posts, setPosts] = useState([]);

        const fetchPosts = async () => {
          const res = await fetch(`/api/users/${(session as any).user.id}/posts`);
          const data = await res.json();
    
          if ((session as any).user.id) setPosts(data);
        }
    
    
        fetchPosts();
      }, [])

    const handleEdit = () => {}
    const handleDelete = async () => {}

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