function Navbar({texto}) {

  const titulos = texto.split('')
  
  

 

  return (
    <nav className='bg-[#97ce4c] m-4 text-3xl text-center p-4 container mx-auto sticky top-0 z-50'>
      <div className="">
        <h1
        className='static md:absolute transition-all font-medium top-0 '
       >JERL</h1>
        <a className=' flex justify-center gap-1' href="/">
          {
            titulos.map((titulo, index) => (
             <p className="text-black shadow drop-shadow-xl p-1 uppercase font-bold shadow-[#f0e14a] shadow-neon" key={index}>{titulo}</p>
            ))
          }
        </a>
        </div>
      </nav>
  )
}

export default Navbar
