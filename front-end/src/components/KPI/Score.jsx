import { useEffect,useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import {getUserData} from '../../api';
import { useParams } from "react-router-dom";

// const data = [
//   { name: "Group A", value: 40 },
//   { name: "Group B", value: 60 },
// ];
const COLORS = ["#E60000", "#FBFBFB"];

const  Score= () =>{
    const [data, setData] = useState(null);
    const {userId} = useParams();
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userResponse = await getUserData(userId);
                const score = userResponse.data.data.score ?? userResponse.data.data.todayScore;
                
                const scoreData = [
                  { name: "Group A", value: score},
                  { name: "Group B", value: 1 - score },
                ];

                setData (scoreData);


            } catch (error) {
                console.error('There was an error fetching the data!', error);
              }
        };
        
        
    fetchUserData();
    }, [userId]);
            

    const cellStyle= {
      stroke: 'none'
    };
   
    return (
<>
     <span className="dashboard__content__chart__smallChart__score__title">Score</span>
      <ResponsiveContainer width="100%" height={263} minWidth={258} >
        <PieChart>
          <Pie
            data={data}
            cx={120}
            cy={150}
            innerRadius={80}
            outerRadius={95}
            dataKey="value"
            cornerRadius= {15}
            startAngle={90}
            endAngle={450}
            
          >
            {data?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                style={cellStyle}
              />
            ))}
            {/* {data?.map((entry, index) => (
              <Label
                key={`label-${index}`}
                value={`${entry.value}%`}
                position="outside"
                // fill={COLORS[index % COLORS.length]}
                offset={10}
                
              />
            ))} */}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="rond">
        
          <p className="dashboard__content__chart__smallChart__score__pourcentage">
          {data?.filter(s=>s.name=="Group A")[0]?.value*100}%
          </p>
          <p className="dashboard__content__chart__smallChart__score__pourcentage__text">
            de votre  <br/> objectif
            </p>
          
        
      </div>
      </>
    );
  }
export default Score;
