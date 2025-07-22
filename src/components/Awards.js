import React from "react";

export default function Awards() {
  const awardsData = [
    {
      year: 2024,
      categories: [
        {
          category: "Academic",
          awards: ["National Merit Scholar", "AP Scholar with Distinction"],
        },
        {
          category: "Extracurricular",
          awards: ["Science Olympiad Regional Medalist"],
        },
      ],
    },
    {
      year: 2023,
      categories: [
        {
          category: "Academic",
          awards: ["Honor Roll (All Semesters)"],
        },
        {
          category: "Extracurricular",
          awards: ["Math Team Captain", "Debate Tournament Finalist"],
        },
        {
          category: "Community & Leadership",
          awards: ["Student Council President", "Volunteer Service Award"],
        },
      ],
    },
  ];

  return (
    <section id="awards" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-600">
            Awards Timeline
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A collection of academic, extracurricular, and leadership awards from recent years.
          </p>
        </div>
        <div className="flex flex-col items-start space-y-12 relative border-l-4 border-gradient-to-b from-blue-400 to-green-600 pl-8">
          {awardsData.map((yearBlock) => (
            <div key={yearBlock.year} className="relative">
              <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full border-4 border-white bg-gradient-to-br from-blue-400 to-green-600 shadow-md" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{yearBlock.year}</h2>
                {yearBlock.categories.map((cat) => (
                  <div key={cat.category} className="mb-4 text-left">
                    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-600">
                      {cat.category}
                    </h3>
                    <ul className="list-disc list-inside ml-2 text-gray-300">
                      {cat.awards.map((award) => (
                        <li key={award} className="text-base">{award}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
