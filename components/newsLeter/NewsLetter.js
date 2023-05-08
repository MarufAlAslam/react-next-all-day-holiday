import React from 'react'

import newsletter from '../../assets/images/newsletter.png'
import Image from 'next/image'

const NewsLetter = () => {
    return (
        <div className='custom-container py-8'>
           <div className='card newsletter-card relative'>
             <Image src={newsletter} alt='newsletter' className='w-full h-full object-cover rounded-lg'/>
             <div className='card-body absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
                <h2 className='text-5xl font-[500] text-white text-center'>
                Zapisz się do <br/> naszego Newslettera
                </h2>

                <span className='text-white text-center h-auto'>
                Zostaw swój e-mail w poniższym formularzu, aby zapisać się do naszego newslettera i <br/>
otrzymywać regularne wiadomości, aktualizacje i oferty specjalne.
                </span>

                <form className='mt-3 lg:w-1/3'>
                    <div className='flex w-full p-1 rounded-full bg-white flex-row justify-center items-center'>
                        <input type='email' placeholder='Twój adres e-mail' className='w-full text-[15px] h-12 rounded-lg border-2 border-white px-4'/>
                        <button className='btn rounded-full btn-golden'>Subskrybuj</button>
                    </div>
                </form>
             </div>
           </div>
        </div>
    )
}

export default NewsLetter