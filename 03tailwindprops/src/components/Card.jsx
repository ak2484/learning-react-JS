import React from "react";

function Card({ username = "AN", post = "Not assigned yet", myArr = "" }) {
  return (
    <figure className='md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800'>
      <img
        className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto'
        src='https://images.pexels.com/photos/6266273/pexels-photo-6266273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=''
        width='384'
        height='512'
      />
      <div className='pt-6 md:p-8 text-center space-y-4 flex flex-col items-center justify-center '>
        <blockquote>
          <p className='text-lg font-medium'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatem, hic.
          </p>
        </blockquote>
        <figcaption className='font-medium'>
          <div className='text-sky-500 dark:text-sky-400'>{username}</div>
          <div className='text-slate-700 dark:text-slate-500'>
            {post} {myArr}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
