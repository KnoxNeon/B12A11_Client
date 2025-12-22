import React from 'react'

const Featured = () => {
    const benefits = [
    {
      title: "Saves Up to 3 Lives",
      description: "One blood donation can help save multiple lives in emergencies, surgeries, and treatments.",
      icon: "❤️",
    },
    {
      title: "Improves Your Health",
      description: "Regular donation reduces iron levels, lowers heart disease risk, and stimulates new blood cell production.",
      icon: "🩸",
    },
    {
      title: "Free Health Check",
      description: "Donors get a mini health screening (blood pressure, pulse, hemoglobin) before donating — completely free!",
      icon: "🩺",
    },
    {
      title: "Burns Calories",
      description: "Donating blood burns around 650 calories as your body works to replenish the lost blood.",
      icon: "🔥",
    },
    {
      title: "Feels Amazing",
      description: "The joy of knowing you've helped someone in need creates an unmatched sense of fulfillment and happiness.",
      icon: "😊",
    },
  ];
  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-20">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
            5 Amazing Benefits of Blood Donation
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Not only do you save lives — you also improve your own health and well-being!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-95 rounded-2xl border border-red-200 shadow-xl p-8 text-center transform hover:scale-105 hover:bg-opacity-100 transition-all duration-300"
            >
              <div className="text-6xl mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-red-700 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
