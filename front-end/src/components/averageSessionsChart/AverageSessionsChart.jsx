
import PropTypes from 'prop-types';
import CustomToolTipAverage from './CustomToolTipAverage';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";


const AverageSessionsChart = ({ data }) => {
  const formatLabel = (value) => {
		if (value === 1) return 'L'
		if (value === 2) return 'M'
		if (value === 3) return 'M'
		if (value === 4) return 'J'
		if (value === 5) return 'V'
		if (value === 6) return 'S'
		if (value === 7) return 'D'
		return value
	}

  return (
    <div className='averageChart'>
      <h3 className="averageChart__title">
				Durée moyenne des <br />
				sessions
			</h3>
      <AreaChart
         width={258}
         height={263}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 10,
          bottom: 0,
        }}
      >
        <defs>
        <linearGradient
							id="colorUv"
							x1="0%"
							y1="0"
							x2="100%"
							y2="0"
						>
							<stop
								offset="0%"
								stopColor="rgba(255, 255, 255, 0.3)"
							/>
							<stop
								offset="20%"
								stopColor="rgba(255, 255, 255, 0.4)"
							/>
							<stop
								offset="40%"
								stopColor="rgba(255, 255, 255, 0.5)"
							/>
							<stop
								offset="60%"
								stopColor="rgba(255, 255, 255, 0.6)"
							/>
							<stop
								offset="100%"
								stopColor="rgba(255, 255, 255, 1)"
							/>
						</linearGradient>
        </defs>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="day" tickFormatter={formatLabel} axisLine={false} tickLine={false} />
        <YAxis hide domain={['dataMin', 'dataMax+10']} />
        <Tooltip
          content={<CustomToolTipAverage />} cursor={false} 
        />
        <Area type="monotone" dataKey="sessionLength" stroke="#ffffff" fill="url(#colorUv)" />
      
      </AreaChart>
    </div>
  );
}
AverageSessionsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired
    })
  ).isRequired,
};
export default AverageSessionsChart;
