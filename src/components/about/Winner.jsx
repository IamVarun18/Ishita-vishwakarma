import React from 'react'

const Winner = () => {
    return (
        <div className='h-screen p-10 gap-[10%]  bg-white flex items-center justify-center'>


            <div className=" flex flex-col gap-5 basis-2/3" >
                <h1 className="font-normal text-red text-9xl px-8" >Winner</h1>

                <p className="px-8 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ducimus, quia itaque ullam, dolorum facere soluta vel enim dicta consequatur nesciunt molestiae culpa. Itaque nostrum error praesentium, libero nisi incidunt suscipit at consequatur mollitia sunt ullam expedita delectus eum perferendis quos molestiae enim quidem pariatur laborum sint magni similique illo!</p>

                <p className="px-8 text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eaque distinctio, quas eligendi, accusantium neque temporibus numquam esse quo ratione possimus delectus libero ducimus eum odio fuga magnam aperiam ex! Ad distinctio ipsa at cupiditate omnis ipsam ratione, .</p>


            </div>


            <div className='h-[80%] w-[30%] flex justify-center items-center '>
                <img className='h-[100%]  ' src="/home/sare.png" alt="" />
            </div>

        </div>
    )
}

export default Winner