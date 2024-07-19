
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Text
} from "recharts";
import {getUserPerformance} from '../../api';
import  {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";


export default function PerformanceChart() {
    const [performanceData, setPerformanceData] = useState(null);
    const {userId} = useParams();
    useEffect(() => {
        const fetchUserData = async () => {
          try {
           
    
            const performanceResponse = await getUserPerformance(userId);
            console.log(performanceResponse.data.data.kind)
            console.log(performanceResponse.data.data.data);

            const formatLabel = (value) => {
                if (value === 'energy') return 'Energie'
                if (value === 'strength') return 'Force'
                if (value === 'speed') return 'Vitesse'
                if (value === 'intensity') return 'Intensité'
                if (value === 'endurance') return 'Endurance'
                if (value === 'cardio') return 'Cardio'
                return value
            }
            
        let newarray = performanceResponse.data.data.data.map(val => {
                let stringkind;

                stringkind = performanceResponse.data.data.kind[val.kind];
                stringkind = formatLabel(stringkind);
                console.log("Formatted kind:", stringkind);
              
              
                return {
                  ...val,
                  stringkind
                };
              });
            newarray= newarray.reverse();
            setPerformanceData(newarray);
            console.log(newarray);
            
          } catch (error) {
            console.error('There was an error fetching the data!', error);
          }
        };
    
    
        fetchUserData();
      }, [userId]);

    //   Pour ajouter le padding entre le text et le chart
      function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
        return (
          <Text
            {...rest}
            verticalAnchor="middle"
            y={y + (y - cy) / 10}
            x={x + (x - cx) / 100}
            fill= "white"
             fontSize="12px"
             startAngle={20}  
          >
            {payload.value}
          </Text>
        );
      }
     
        
  return (
    <RadarChart 
      cx={130}
      cy={130}
      outerRadius={90}
      width={258}
      height={263}
      data={performanceData}
      
    >
      <PolarGrid  radialLines={false}/>
      <PolarAngleAxis dataKey="stringkind" tick={props => renderPolarAngleAxis(props)}  />
      
      <Radar
        dataKey="value"
        fill="#FF0101B2"
        fillOpacity={0.7}
      />
    </RadarChart>
  );
}
