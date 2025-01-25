import Link from 'next/link'

const Home = () => {
  return (
    <div className='w-full h-screen p-20'>
        <div className='flex flex-col justify-center h-full m-auto w-fit'>
            <div>
                <h1 className='text-[30px] font-[600]'>Frontend Developer Task</h1>
                <p>Provided by <span className='text-[--green]'>Vrit Technologies</span></p>
            </div>
            <div className='flex w-full my-10 justify-center gap-10 items-start'>
                <Link href='/task1' className='bg-[--task2-white] text-[--background] p-40 text-[50px] font-[800] rounded-2xl transition hover:bg-gray-300'>Task 1</Link>
                <Link href='/task2' className='bg-[--task2-white] text-[--background] p-40 text-[50px] font-[800] rounded-2xl transition hover:bg-gray-300'>Task 2</Link>
            </div>
        </div>
    </div>
  )
}

export default Home;