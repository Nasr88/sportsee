
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
import { PerformanceModel } from '../../models/PerformanceModel'; 

export default function PerformanceChart() {
  const [performanceData, setPerformanceData] = useState(null);
  const {userId} = useParams();
  const { mocked } = useContext(DataContext);

  useEffect(() => {
      const fetchUserData = async () => {
        try {
          let performanceResponse;

          if (mocked) {
            const mockData = USER_PERFORMANCE.find(user => user.data.userId === Number(userId));
            if (mockData) {
              performanceResponse = { data: mockData.data };
            } else {
              throw new Error('User not found in mock data');
            }
          } else {
            performanceResponse = await getUserPerformance(userId);
          }

          const { kind, data } = performanceResponse.data;

          // Utiliser la classe PerformanceModel pour transformer les données
          const performanceModel = new PerformanceModel(data, kind);
          const transformedData = performanceModel.transformData();

          setPerformanceData(transformedData);

        } catch (error) {
          console.error('There was an error fetching the data!', error);
        }
      };

      fetchUserData();
  }, [userId, mocked]);

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
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="stringkind" tick={props => renderPolarAngleAxis(props)} />
      <Radar
        dataKey="value"
        fill="#FF0101B2"
        fillOpacity={0.7}
      />
    </RadarChart>
  );
}