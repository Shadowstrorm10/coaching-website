"use client";

import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import Preloader from "@/components/Preloader";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";

const Notes: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setActiveTab(null); // Reset tab when a new category is selected
    setSelectedChapter(null);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSelectedChapter(null); // Reset chapter view when switching tabs
  };

  const handleChapterClick = (pdf: string) => {
    setSelectedPdf(pdf);
  };

  const handleCloseCategory = () => {
    setSelectedCategory(null);
    setActiveTab(null);
    setSelectedChapter(null);
    setSelectedPdf(null);
  };

  const handleClosePdf = () => {
    setSelectedPdf(null);
  };

  // Sample PDFs organized by class and tab
  const pdfs = {
    "10th Class": {
      "Sample Papers": [
        { chapter: "Math Chapter 1", filename: "math_chapter1_10.pdf" },
        { chapter: "Science Chapter 1", filename: "science_chapter1_10.pdf" },
      ],
      "Important Notes": [
        { chapter: "Biology Chapter 1", filename: "bio_chapter1_10.pdf" },
        { chapter: "Chemistry Reactions", filename: "chem_reactions_10.pdf" },
      ],
      "Other Activities": [
        { chapter: "Physics Experiments", filename: "physics_experiments_10.pdf" },
        { chapter: "Chemistry Labs", filename: "chemistry_labs_10.pdf" },
      ],
    },
    "+1 Class": {
      "Sample Papers": [
        { chapter: "Math Chapter 1", filename: "math_chapter1_11.pdf" },
        { chapter: "Physics Chapter 1", filename: "physics_chapter1_11.pdf" },
      ],
      "Important Notes": [
        { chapter: "Biology Chapter 1", filename: "bio_chapter1_11.pdf" },
        { chapter: "Chemistry Reactions", filename: "chem_reactions_11.pdf" },
      ],
      "Other Activities": [
        { chapter: "Physics Experiments", filename: "physics_experiments_11.pdf" },
        { chapter: "Chemistry Labs", filename: "chemistry_labs_11.pdf" },
      ],
    },
    "+2 Class": {
      "Sample Papers": [
        { chapter: "Math Chapter 1", filename: "math_chapter1_12.pdf" },
        { chapter: "Physics Chapter 1", filename: "physics_chapter1_12.pdf" },
      ],
      "Important Notes": [
        { chapter: "Biology Chapter 1", filename: "bio_chapter1_12.pdf" },
        { chapter: "Chemistry Reactions", filename: "chem_reactions_12.pdf" },
      ],
      "Other Activities": [
        { chapter: "Physics Experiments", filename: "physics_experiments_12.pdf" },
        { chapter: "Chemistry Labs", filename: "chemistry_labs_12.pdf" },
      ],
    },
  };

  const activeChapters = pdfs[selectedCategory]?.[activeTab] || [];

  return (
    <>
      <Preloader />
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-semibold text-center text-purple-800 mb-8">
          Notes and Resources
        </h1>

        {/* Category Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["10th Class", "+1 Class", "+2 Class"].map((category) => (
            <div
              key={category}
              className="bg-purple-600 text-white p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 transform cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              <h2 className="text-2xl font-semibold mb-2">{category}</h2>
              <p className="text-sm">Resources for {category === "10th Class" ? "10th grade" : category === "+1 Class" ? "11th grade" : "12th grade"}</p>
            </div>
          ))}
        </div>

        {/* Section for Category Details */}
        {selectedCategory && !activeTab && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4 transition-all">
            <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 transform scale-110 transition-all">
              <button
                onClick={handleCloseCategory}
                className="absolute top-4 right-4 bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700 transition"
              >
                <FiX size={24} />
              </button>
              <h2 className="text-3xl font-semibold text-center text-purple-800 mb-6">{selectedCategory} Resources</h2>

              {/* Tabs for Different Sections */}
              <div className="flex justify-center space-x-6 mb-8">
                {["Sample Papers", "Important Notes", "Other Activities"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${activeTab === tab ? "bg-purple-700 text-white" : "bg-purple-600 text-white hover:bg-purple-700"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Display Chapters in the Selected Tab */}
        {activeTab && !selectedPdf && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4 transition-all">
            <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 transform scale-110 transition-all">
              <button
                onClick={() => setActiveTab(null)}
                className="absolute top-4 right-4 bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700 transition"
              >
                <FiX size={24} />
              </button>
              <h2 className="text-2xl font-semibold text-center text-purple-800 mb-6">
                {activeTab} - {selectedCategory}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeChapters.map((pdf) => (
                  <button
                    key={pdf.filename}
                    onClick={() => handleChapterClick(pdf.filename)}
                    className="bg-purple-500 text-white px-4 py-3 rounded-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {pdf.chapter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modal for PDF Display */}
        {selectedPdf && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4 transition-all">
            <div className="relative w-full max-w-4xl h-full sm:h-[90vh] rounded-lg overflow-hidden bg-white shadow-lg">
              <button
                onClick={handleClosePdf}
                className="absolute top-4 right-4 bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700 transition"
              >
                <FiX size={24} />
              </button>
              <iframe
                src={`/${selectedPdf}`}
                width="100%"
                height="100%"
                className="rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
      <NewFooter />
    </>
  );
};

export default Notes;
