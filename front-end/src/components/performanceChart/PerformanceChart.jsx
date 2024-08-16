
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Text
} from "recharts";
import { USER_PERFORMANCE } from '../../mocks/dataMocked'; // Assure-toi que le chemin est correct
import { getUserPerformance } from '../../api';
import  {useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";

export default function PerformanceChart() {
    const [performanceData, setPerformanceData] = useState(null);
    const {userId} = useParams();
    const { mocked } = useContext(DataContext);
     // Vérifie si nous devons utiliser les données mockées
    // const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';

    useEffect(() => {
        const fetchUserData = async () => {
          try {
           
    
            // const performanceResponse = await getUserPerformance(userId);
            // console.log(performanceResponse.data.data.kind)
            // console.log(performanceResponse.data.data.data);

            let performanceResponse;

            if (mocked) {
              // Utilise les données mockées
              const mockData = USER_PERFORMANCE.find(user => user.data.userId === Number(userId));
              if (mockData) {
                performanceResponse = { data: mockData };
              } else {
                throw new Error('User not found in mock data');
              }
            } else {
              // Utilise les données de l'API
              performanceResponse = await getUserPerformance(mocked,userId);
            }
    
            const { kind, data } = performanceResponse.data;
    
            // console.log('Kind:', kind);
            // console.log('Data:', data);
    
            // Fonction pour formater les labels
            const formatLabel = (value) => {
              switch (value) {
                case 'energy': return 'Energie';
                case 'strength': return 'Force';
                case 'speed': return 'Vitesse';
                case 'intensity': return 'Intensité';
                case 'endurance': return 'Endurance';
                case 'cardio': return 'Cardio';
                default: return value;
              }
            };
    
            // Transformer les données
            let newArray = data.map(val => {
              const stringkind = formatLabel(kind[val.kind]);
              console.log('Formatted kind:', stringkind);
              return {
                ...val,
                stringkind
              };
            });
    
            // Inverser l'ordre des données
            newArray = newArray.reverse();
    
            // Mettre à jour l'état
            setPerformanceData(newArray);
            console.log(newArray);
    
          } catch (error) {
            console.error('There was an error fetching the data!', error);
          }
        };
    
        fetchUserData();
      }, [userId, mocked]);
    
      // Fonction pour ajouter le padding entre le texte et le chart
      function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
        return (
          <Text
            {...rest}
            verticalAnchor="middle"
            y={y + (y - cy) / 10}
            x={x + (x - cx) / 100}
            fill="white"
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
