'use client';

import useSWR from 'swr';
import { FormEvent, useState } from 'react';
import CommentCard from './CommentCard';

const fetcher = (url:any) => fetch(url).then((res) => res.json());

export default function Comments() {
  const { data, error, mutate } = useSWR('/api/comments', fetcher, {
    refreshInterval: 15000,
  });


  return (
    <div>
      <h1 className='text-center text-[3rem] font-bold mb-4'>Komentarze</h1>
      <div className='hidden sm:grid grid-cols-1 gap-y-8'>
        {data && data.length > 0 ? (
            data.map((comment:any, index: any) => (
              <CommentCard key={index} text={comment.text} color={comment.color}/>
            ))
        ) : (
          <p className='text-lg font-bold'>Komentarze pojawią się tutaj...</p>
        )}
      </div>
    </div>
  );
}
