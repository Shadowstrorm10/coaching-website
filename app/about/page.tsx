"use client";

import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import Preloader from "@/components/Preloader";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <><Preloader /><Header /><div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        {/* Teacher Image Section */}
        <section className="flex flex-col sm:flex-row items-center mb-16 py-8 relative">
          <div className="flex-1 pr-6 text-center sm:text-left">

            <h2 className="text-2xl sm:text-xl font-medium text-purple-700 mt-4">Rakesh Sir</h2>
            <p className="text-base sm:text-sm text-gray-600 max-w-md mx-auto mt-4 leading-relaxed">
              Rakesh Sir is a passionate educator with over 10 years of experience in teaching Chemistry. His
              teaching methodology focuses on making complex concepts easy and understandable for students.
            </p>
          </div>
          <div className="flex-1 pl-6 mt-4 sm:mt-0">
            <img
              src="teacher.jpeg" // Replace with your classroom image
              alt="Classroom"
              className="w-full sm:w-1/2 object-cover h-auto max-h-[600px] rounded-lg" // Increase width and max height for a bigger portrait
            />
          </div>
        </section>

        {/* Classroom Image Section */}
        <section className="flex flex-col sm:flex-row items-center mb-16 py-8 relative">
          <div className="flex-1 pr-6 text-center sm:text-left">
            <h2 className="text-2xl sm:text-xl font-medium text-purple-700 mb-4">Our Coaching Center</h2>
            <p className="text-base sm:text-sm text-gray-600 mt-4">
              Our classroom is designed to create a conducive environment for learning, equipped with modern
              teaching aids that make every lesson interactive.
            </p>
          </div>
          <div className="flex-1 pl-6 mt-4 sm:mt-0">
            <img
              src="coaching-centre.jpeg" // Replace with your classroom image
              alt="Classroom"
              className="w-full object-cover h-64 rounded-lg" />
          </div>
        </section>

        {/* Books Section */}
        <section className="flex flex-col sm:flex-row items-center mb-16 py-8 relative">
          <div className="flex-1 pr-6 mt-4 sm:mt-0">
            <img
              src="book1.jpeg" // Replace with your book image
              alt="Book 1"
              className="w-full object-cover h-64 rounded-lg" />
          </div>
          <div className="flex-1 pl-6 text-center sm:text-left mt-4 sm:mt-0">
            <h2 className="text-2xl sm:text-xl font-medium text-purple-700 mb-4">Books by Rakesh Sir</h2>
            <p className="text-base sm:text-sm text-gray-600 mt-4">
              Rakesh Sir has authored a series of books that simplify complex chemistry concepts and make learning fun.
              His books are designed for students at all levels.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="flex flex-col sm:flex-row items-center mb-16 py-8 relative">
          <div className="flex-1 pr-6 text-center sm:text-left">
            <h2 className="text-2xl sm:text-xl font-medium text-purple-700 mb-4">Watch Our Classroom in Action</h2>
            <p className="text-base sm:text-sm text-gray-600 mt-4">
              Watch our classroom in action and see how Rakesh Sir makes learning chemistry fun and engaging.
            </p>
          </div>
          <div className="flex-1 pl-6 mt-4 sm:mt-0">
            <div className="relative mx-auto max-w-4xl">
              <video
                width="100%"
                height="400"
                src="classroom video.mp4" // Replace with your video URL
                title="Classroom Video"
                loop
                muted
                controls
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <NewFooter />
      </div>
    </div></>
  );
};

export default AboutUs;
