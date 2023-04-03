import Banner from '../../assets/image-hero-desktop.png';
import BannerMob from '../../assets/image-hero-mobile.png'
import { ReactComponent as Databiz } from '../../assets/client-databiz.svg'
import { ReactComponent as Audiophile } from '../../assets/client-audiophile.svg'
import { ReactComponent as Meet } from '../../assets/client-meet.svg'
import { ReactComponent as Maker } from '../../assets/client-maker.svg'
import { Button } from '../Button';

const svgClass = 'w-[114px] h-[20px]'


export const Main = () => {
  return (
    <main className='w-full flex mb-12 justify-between'>
      <div className='w-2/4 text-left mb-4 mt-40'>
        <h1 className='text-3xl xl:text-8xl font-black whitespace-pre-line mb-12'>
          {'Make\n remote work'}
        </h1>
        <p className='text-medium-gray text-lg whitespace-pre-line mb-12'>
          {'Lorem, ipsum dolor sit amet consectetur\n adipisicing elit.'}
        </p>
        <Button isFilled={true}>
          Learn more
        </Button>
        <div className='flex gap-4 justify-around mt-48'>
          <Maker className={svgClass} />
          <Meet className={svgClass} />
          <Audiophile className={svgClass} />
          <Databiz className={svgClass} />
        </div>
      </div>
      <div className='flex'>
        <img src={Banner} alt="coolman" className='mt-20' />
      </div>
    </main>
  )
}
