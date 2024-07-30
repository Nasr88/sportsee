import { useEffect,useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer} from "recharts";
import {getUserData} from '../../api';
import { useParams } from "react-router-dom";


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
            

    
   
    return (
      <>
          
          <div className="dashboard__content__chart__smallChart__score" style={{ position: 'relative', width: '100%', height: '263px', minWidth: '258px' }}>
          <span className="dashboard__content__chart__smallChart__score__title">Score</span>
          <ResponsiveContainer width="100%" height={263} minWidth={258} >
            <PieChart>
              {/* External Pie with shadow */}
            <defs>
                 <feDropShadow dx="0" dy="0" stdDeviation="15" floodColor="#000" floodOpacity="0.2" />
            </defs>
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
                
                style={{ filter: 'url(#shadow)' }}
              >
                {data?.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              
              </Pie>
              {/* Internal Pie to create white center */}
            <Pie
              data={[{ name: 'inner', value: 1 }]}
              cx={120}
              cy={150}
              innerRadius={0}
              outerRadius={80}
              fill="#ffffff"
              dataKey="value"
            />
            </PieChart>
          </ResponsiveContainer>
      
          <div style={{ position: 'absolute', top: '30%', left: '80%', textAlign: 'center', pointerEvents: 'none' }}>
     
          <p className="dashboard__content__chart__smallChart__score__pourcentage">
          {data?.filter(s=>s.name=="Group A")[0]?.value*100}%
          </p>
          <p className="dashboard__content__chart__smallChart__score__pourcentage__text">
            de votre  <br/> objectif
          </p>
          </div>
          </div>
          
        
     
      </>
    );
  }
export default Score;
