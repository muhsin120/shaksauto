import Service from "../_components/Service";

// src/app/services/page.tsx
export default function Services() {
  const datas = [
    {
      type: "Bronze",
      //price: 70,
      points: [
        { point: "Vacuum & Dust Interior" },
        { point: "Clean Windows" },
        { point: "Air freshner (optional) " },
        { point: "Remove all garbages" },
      ],
    },
    {
      type: "Gold",
      //price:90,
      points: [
        { point: "Everything on Bronze package" },
        { point: "Floor & carpet shampoo" },
        { point: "Steam cleaning air vents" },
        // { point: "Vacuum & Dust Interior" },
      ],
    },
    {
      type: "Platinum",
      //price:111,
      points: [
        { point: "Everything on Gold package" },
        { point: "Seat shampoo" },
        { point: "Clean door jamps" },
        // { point: "Vacuum & Dust Interior" },
      ],
    },
  ];
  return (
    <div id="services" className="~pt-[2rem]/[5rem] pb-[7rem]">
      <h2 className=" font-bold text-center py-[3rem] font-poppins ~text-display-small/display-large text-darkBlue">
        Our Services
      </h2>
      <div className="flex flex-col items-center md:flex-row gap-[3rem] justify-center">
        {datas.map((item, i) => (
          <Service key={i} points={item.points}  type={item.type} />
        ))}
      </div>
      {/* <div className="flex flex-col items-center justify-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8">
        <div className="max-w-sm bg-gray-800 text-gray-300 border border-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <h3 className="text-2xl font-bold text-teal-300 mb-4">Bronze</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Vacuum & Dust Interior</li>
            <li>Clean Windows</li>
            <li>Air freshener (optional)</li>
            <li>Remove all garbage</li>
          </ul>
          <p className="text-xl font-bold text-teal-400">$50</p>
        </div>

        <div className="max-w-sm bg-gray-800 text-gray-300 border border-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Gold</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Everything in the Bronze package</li>
            <li>Floor and carpet shampoo</li>
            <li>Steam cleaning air vents</li>
          </ul>
          <p className="text-xl font-bold text-yellow-500">$70</p>
        </div>

        <div className="max-w-sm bg-gray-800 text-gray-300 border border-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">Platinum</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Everything in the Gold package</li>
            <li>Seat shampoo</li>
            <li>Clean door jambs</li>
          </ul>
          <p className="text-xl font-bold text-purple-500">$90</p>
        </div>
      </div> */}
    </div>
  );
}
