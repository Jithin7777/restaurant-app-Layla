import React from "react";

interface SignatureCardProps {
  image: string;
  title: string;
  // price: number;
}

const SignatureCard: React.FC<SignatureCardProps> = ({
  image,
  title,
  // price,
}) => {
  return (
    <div className="flex flex-col items-center text-center text-white">
      <div className="relative w-full h-[180px] md:h-[200px]   overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-[320px] h-full object-cover object-center"
          style={{ objectPosition: "center center" }}
        />
      </div>
      {/* Price and Title */}
      {/* <div className="absolute top-12 -right-5 bg-yellow-600 text-black font-bold text-sm px-4 py-2 rounded-full shadow-lg">
        € {price}
      </div> */}
      <h3 className="mt-2 font-serif text-xl font-playfair font-normal whitespace-pre-line">
        {title}
      </h3>
    </div>
  );
};

export default SignatureCard;
