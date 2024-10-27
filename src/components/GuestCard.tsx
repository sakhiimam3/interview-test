import Image from 'next/image'
import { ArrowIcon } from './Icon'

interface GuestCardProps {
  name: string
  price: string
  image?: string 

}

const GuestCard: React.FC<GuestCardProps> = ({ name, price, image }) => {
  return (
    <div className="card-bg rounded-xl overflow-hidden shadow-lg">
      <div className="m-2">
        <Image
          src={image ?? "/imgs/default-image.png"}
          alt={name}
          width={100}
          height={100}
          className="w-full h-50 object-cover"
        />
      </div>
      <div className="p-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-3 font-playfair  font-medium">{name}</h2>
          <p className="bg-[#AD8749] py-1 px-7 font-inter rounded-2xl inline-flex items-center justify-center">
            {price}
          </p>
        </div>
        <ArrowIcon />
      </div>
    </div>
  )
}

export default GuestCard
