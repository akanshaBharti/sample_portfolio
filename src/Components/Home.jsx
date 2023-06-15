import { Button } from '@material-tailwind/react'
import React from 'react'
import './home.css'

function Home(){
    return(
        <>
        <div className=' bg-gradient-to-r from-teal-500 from-10% via-cyan-500 via-30% to-cyan-900 to-90%'>
            <section className='px-20 py-40'>
                <div className=' flex flex-col md:flex-row'>
                <img
                  src='/images/akansha_photo.jpg'
                  className='h-1/2 mx-auto w-80 -mx-4 -mt-1 rounded-full border-2 p-2 hover:border-black hover:scale-110 transition duration-300 ease-in-out'
                  alt=''
                />

                <div className='grid xl:px-16 md:px-10 mt-6 '>
                 <h1 className='akansha-demo xl:text-5xl md:text-4xl sm:text-4xl text-black hover:text-white '>Hi, I am Akansha Bharti</h1>
                 <h1 className='xl:text-3xl md:text-2xl text-black hover:text-white'>Frontend web developer<br></br>Student</h1>
                 <h1 className='xl:text-xl md:text-l text-black hover:text-white'>I am currently pursuing B.Sc. (Hons.) Computer Science from Hansraj<br></br>College, University of Delhi. 
                  I am interested in programming and development. <br></br>I am developing my skills in Frontend development.
                    <br></br>I am also involved in my departmental society and serving as the <br></br>Society's General Secretary. 
                   <br></br> I am good at drawing.</h1>
                <div className='flex m-14'>
                <h1 className='text-2xl text-black hover:text-white'>Resume:</h1>
                <a href='https://drive.google.com/file/d/1PqJj-vEwVgpa7p_UIJWcR1LqAZKwgfq-/view?usp=sharing' target='_blank'>
                <Button className='bg-transparent hover:bg-cyan-900 border rounded-full w-24 h-8 ml-6 mt-1'>visit </Button></a>
                </div> 
                
                 </div>
                 

                </div>

            </section>
            
            

        </div>
        </>
    )
}

export default Home