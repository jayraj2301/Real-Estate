import PostForm from '@/components/forms/PostForm'

function AddProperty() {
  return (
    <div className='flex flex-1 bg-black'>
      <div className='flex flex-col flex-1 items-center gap-10 
      overflow-scroll py-10 px-5 md:px-8 lg:p-14 custom-scrollbar'>
        <div className='max-w-3xl flex justify-start gap-3 w-full'>
          <img
            src='/assets/add-post.svg'
            alt='add photo'
            width={36}
            height={36}
          />
          <h2 className='text-left w-full md:text-[30px] text-[24px] font-bold leading-[140%] tracking-tighter '>Create Post</h2>
        </div>
        <PostForm />
      </div>
    </div>
  )
}

export default AddProperty