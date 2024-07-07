
import PropTypes from 'prop-types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AverageSessionsChart = ({ data }) => {
  const formatXAxis = (tickItem) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return days[tickItem - 1];
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" tickFormatter={formatXAxis} />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="sessionLength" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

AverageSessionsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AverageSessionsChart;
