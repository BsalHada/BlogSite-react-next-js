import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "@/app/ui/authors/Author";

const Section1 = () => {

  // backgroundimage
  // const bg={
  //   background:"url('/images/dotBg2.jpg')no-repeat",
  //   backgroundPosition:"left"
  // }
  
  const Slide = () => {
    return (
      <div className="grid md:grid-cols-2">
        <div className="image">
          <Link href={"/"}>
            <Image
              src={"/images/blogHeroImage.jpeg"}
              className="object-contain"
              width={400}
              height={400}
              alt={"hero image"}
            />
          </Link>
        </div>
        <div className="info flex justify-center flex-col">
          <div className="cat">
            <Link href={"/"}>
              {" "}
              <span className="text-orange-600 hover:text-orange-900">
                Business, Travel
              </span>
            </Link>
            <Link href={"/"}>
              {" "}
              <span className="text-gray-600 hover:text-gray-900 text-sm">
                -Nov10,2023
              </span>

             
            
            </Link>
          </div>
          <div className="text-container">
            <div className="title">
              <Link href={"/"}>
                <span className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
                  Life is too short to waste time on things that don’t matter.
                </span>
              </Link>
            </div>
            <div className="body">
              <span className="text-gray-500 py-3 ">
                If you’re a content creator looking to spice up your Instagram
                account, you know that having a great caption for your photo or
                reels is just as important as having a great photo or reel
                video. A well-crafted caption can not only increase the appeal
                and aesthetic of your post but can also spike up engagement on
                the posts. In this post, we have listed some of the best
                aesthetic captions for Instagram to complement your aesthetic
                posts. From deep aesthetic captions to unique aesthetic
                captions, here you will find some 250+ best ones you can copy to
                elevate your content and make it stand out from the rest. Read
                on if you’re looking for inspiration for your next Instagram
                photo or reels!
              </span>
            </div>
          </div>
          <div className="author-container">
<Author/>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">{Slide()}</div>
    </section>
  );
};

export default Section1;
