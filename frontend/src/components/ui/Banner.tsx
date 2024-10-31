import banner from '../assets/banner.jpg'

const Banner = () => {
  return (
    <div><img src={banner} className='w-full h-[200px] md:h-[400px] object-fill rounded-md shadow-custom-shadow'></img></div>
  )
}

export default Banner