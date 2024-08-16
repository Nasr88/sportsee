import { useEffect, useState, useContext } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { useParams } from "react-router-dom";
import ActivityChart from "../../components/activity/ActivityChart";
import AverageSessionsChart from "../../components/averageSessionsChart/AverageSessionsChart";
import ChartPerformance from "../../components/performanceChart/PerformanceChart";
import {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
} from "../../api";
import NutrientCard from "../../components/nutrientCard/NutrientCard";
import calorieIcon from "../../assets/images/energy.svg";
import proteinIcon from "../../assets/images/chicken.svg";
import carbIcon from "../../assets/images/apple.svg";
import fatIcon from "../../assets/images/cheeseburger.svg";
import Score from "../../components/KPI/Score";
import { UserContext } from "../../contexts/UserContext";
import { DataContext } from "../../contexts/DataContext";

const Dashboard = () => {
  const { userId, setUserId } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageSessionData, setAverageSessionData] = useState(null);
  const { userId: paramUserId } = useParams();

  const { mocked } = useContext(DataContext);

  useEffect(() => {
    if (paramUserId) {
      setUserId(Number(paramUserId));
    }
  }, [paramUserId, setUserId]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
    
        //const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === "true";

        const userResponse = await getUserData(mocked,userId);


        console.log("Dashboard data:", mocked ? userResponse.data : userResponse.data.data);
        setData(mocked ? userResponse.data : userResponse.data.data);

        const activityResponse = await getUserActivity(mocked,userId);
        setActivityData(mocked ? activityResponse.data.sessions : activityResponse.data.data.sessions);

        const averageSessionResponse = await getUserAverageSessions(mocked,userId);
        setAverageSessionData(mocked ? averageSessionResponse.data.sessions : averageSessionResponse.data.data.sessions);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    fetchUserData();
  }, [userId,mocked]);

  if (!data || !activityData || !averageSessionData) {
    return <div>Loading...</div>;
  }

  const { keyData } = data;

  return (
    <>
      <Header />
      <Sidebar />
      <div className="container">
        <main className="dashboard">
          <div className="dashboard__header">
            {data ? (
              <div className="dashboard__header__title">
                <span className="dashboard__header__title--black">
                  Bonjour{" "}
                </span>{" "}
                {data.userInfos.firstName}
              </div>
            ) : (
              <div>Loading...</div>
            )}
            <span className="dashboard__header__subtitle">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </span>
          </div>
          <div className="dashboard__content">
            <section className="dashboard__content__chart">
              <div className="dashboard__content__chart__activity">
                <ActivityChart data={activityData} />
              </div>
              <div className="dashboard__content__chart__smallChart">
                <div className="dashboard__content__chart__smallChart__average">
                  <AverageSessionsChart data={averageSessionData} />
                </div>
                <div className="dashboard__content__chart__smallChart__performance">
                  <ChartPerformance />
                </div>
                <div className="dashboard__content__chart__smallChart__score">
                  <Score />
                </div>
              </div>
            </section>
            <section className="dashboard__content__nutrients">
              <NutrientCard
                icon={calorieIcon}
                type="Calories"
                amount={`${keyData.calorieCount}kCal`}
                color="#fbeaea"
              />
              <NutrientCard
                icon={proteinIcon}
                type="Protéines"
                amount={`${keyData.proteinCount}g`}
                color="#e9f4fb"
              />
              <NutrientCard
                icon={carbIcon}
                type="Glucides"
                amount={`${keyData.carbohydrateCount}g`}
                color="#f9f5e4"
              />
              <NutrientCard
                icon={fatIcon}
                type="Lipides"
                amount={`${keyData.lipidCount}g`}
                color="#fae9ee"
              />
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
