import CenteredText from "./CenterText";
import GuestCard from "./GuestCard";

export default function Resotrant() {
  const restaurants = [
    {
      name: "Vida Vera",
      price: "100 AED PER GUEST",
      image: "/imgs/guest-1.png",
    },
    {
      name: "Zama Zulu",
      price: "150 AED PER GUEST",
      image: "/imgs/guest-2.png",
    },
    {
      name: "Khawaja Yanni",
      price: "120 AED PER GUEST",
      image: "/imgs/guest-3.png",
    },
    {
      name: "Yamagata",
      price: "200 AED PER GUEST",
      image: "/imgs/guest-4.png",
    },
  ];

  return (
    <div className="min-h-screen bg-olive-900 text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <CenteredText
          text=" Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
          title="Experience the Finest Cuisine"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restaurants.map((restaurant, index) => {
            const { name, price, image } = restaurant;
            return (
              <GuestCard name={name} price={price} image={image} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
