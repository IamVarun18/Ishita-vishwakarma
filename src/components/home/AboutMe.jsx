const AboutMe = () => {
  return (
    <div className="h-screen  flex justify-center items-center ">
      <div className=" w-[80%]  h-[75%] flex">
        <div className=" basis-1/3  relative flex flex-auto" >
          <img className="h-[90%] absolute bottom-5  left-20  " src="https://images.unsplash.com/photo-1630312874843-53f1295ae463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlZCUyMGNhcmR8ZW58MHx8MHx8fDA%3D" alt="" />
          <img className="h-[90%] absolute drop-shadow-xl shadow shadow-2xl " src="https://images.unsplash.com/photo-1630312874843-53f1295ae463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlZCUyMGNhcmR8ZW58MHx8MHx8fDA%3D" alt="" /></div>
        <div className=" flex flex-col gap-5 basis-2/3" >
          <h1 className="font-normal text-red text-8xl px-8" >About Me</h1>

          <p className="px-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ducimus, quia itaque ullam, dolorum facere soluta vel enim dicta consequatur nesciunt molestiae culpa. Itaque nostrum error praesentium, libero nisi incidunt suscipit at consequatur mollitia sunt ullam expedita delectus eum perferendis quos molestiae enim quidem pariatur laborum sint magni similique illo!</p>

          <p className="px-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eaque distinctio, quas eligendi, accusantium neque temporibus numquam esse quo ratione possimus delectus libero ducimus eum odio fuga magnam aperiam ex! Ad distinctio ipsa at cupiditate omnis ipsam ratione, facere, fuga totam cum odit! Enim repudiandae possimus nihil porro perspiciatis reprehenderit.</p>

          <h6 className="px-8">-ishita Vishwakarma</h6>
          <h6 className="px-8"    >learn more</h6>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
