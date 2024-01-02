import Heading from "../Shared/Heading"


const Header = ({ rooms }) => {
  return (
    <>
      <Heading title={rooms.title} subtitle={rooms.location} />
      <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
        <img
          className='object-cover w-full'
          src={rooms.image}
          alt='header image'
        />
      </div>
    </>
  )
}

export default Header