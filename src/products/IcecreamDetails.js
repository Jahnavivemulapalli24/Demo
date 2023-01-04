import { useParams } from "react-router-dom";


const IcecreamDetails = () => {

  const params = useParams();

  const IcecreamDetails = [

    {

       id: "1",
       name: "Chocolate",
       cost: "50",
       grams: "500 Grams",
    },

    {

      id: "2",
      name: "Butter scotch",
      cost: "60",
      grams: "400 Grams",

    },

    {

      id: "3",
      name: "Black Current",
      cost: "100",
      grams: "450 Grams",

    },

    {

      id: "4",
      name: "Starwberry",
      cost: "150",
      grams: "400 Grams",

    },
    
];
const result = IcecreamDetails.filter((p) => p.id === params.icecreamId);

return (
    <div>

      <h1>Icecream Details</h1>

      <div>

        {result.map((Icecream) => (

          <div>

            <p>Name: {Icecream.name}</p>
            <p>Cost: {Icecream.cost}</p>
            <p>Grams: {Icecream.grams}</p>

          </div>

        ))}

      </div>

    </div>
  );

};


export default IcecreamDetails;




