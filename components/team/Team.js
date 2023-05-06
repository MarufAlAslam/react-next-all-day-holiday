import React from "react";
import t1 from "../../assets/images/t1.png";
import t2 from "../../assets/images/t2.png";
import t3 from "../../assets/images/t3.png";
import t4 from "../../assets/images/t4.png";

import TeamCard from "./TeamCard";

const Team = () => {
    const data = [
        {
            id: 1,
            name: "Maciej Czernicki",
            position: "Nawiązywanie współpracy",
            image: t1,
            email: "b2b@alldayholday.pl",
            phone: "+1 323-913-4688"
        },
        {
            id: 2,
            name: "Mateusz Kwiatkowski",
            position: "Dział rozliczeń",
            image: t2,
            email: "finance@alldayholday.pl",
            phone: "+1 323-913-4688"
        },
        {
            id: 3,
            name: "Aleksandra Kwiatkowska",
            position: "Rezerwacje i recepcja",
            image: t3,
            email: "contact@alldayholday.pl",
            phone: "+1 323-913-4688"
        },
        {
            id: 4,
            name: "Krzesimir Kaffke",
            position: "Rezerwacje i recepcja",
            image: t4,
            email: "contact@alldayholday.pl",
            phone: "+1 323-913-4688"
        },

    ]
  return (
    <div className="team py-8">
      <div className="custom-container">
        <div className="text-center">
          <h2 className="text-5xl font-[500] mb-3">
            Masz pytanie? <br /> Skontaktuj się z nami
          </h2>
          <span className="text-[#757783] text-[15px]">
            Nie wahaj się skontaktować z nami, jeśli masz jakieś pytania lub
            potrzebujesz pomocy. <br/> Jesteśmy dostępni i gotowi, aby Ci pomóc!
          </span>
        </div>


        <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {
                data.map((team) => (
                    <TeamCard team={team} key={team.id}/>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Team;
