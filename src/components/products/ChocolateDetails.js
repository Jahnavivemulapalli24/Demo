import { useParams } from "react-router-dom";


const ChocolateDetails = () => {

  const params = useParams();

  const ChocolateDetails = [

    {

       id: "1",
       name: "Daily Milk",
       type: "Chocolate",
       cost: "50",
       grams: "500 Grams",
    },

    {

      id: "2",
      name: "5 Star",
      type: "Chocolate",
      cost: "60",
      grams: "400 Grams",

    },

    {

      id: "3",
      name: "Kitkat",
      type: "Chocolate",
      cost: "100",
      grams: "450 Grams",

    },

    {

      id: "4",
      name: "Twix",
      type: "Chocolate",
      cost: "150",
      grams: "400 Grams",

    },
    
];
const result = ChocolateDetails.filter((p) => p.id === params.chocolateId);

return (
    <div>

      <h1>Chocolate Details</h1>

      <div>

        {result.map((Chocolate) => (

          <div>

            <p>Name: {Chocolate.name}</p>
            <p>Type: {Chocolate.type}</p>
            <p>Cost: {Chocolate.cost}</p>
            <p>Grams: {Chocolate.grams}</p>

          </div>

        ))}

      </div>

    </div>
  );

};


export default ChocolateDetails;




