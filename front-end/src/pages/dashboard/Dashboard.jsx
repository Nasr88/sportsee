import  { useEffect, useState} from 'react';
//import api from '../../api';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { useParams } from 'react-router-dom';
// import { mockUserDatas} from '../../mocks/userMock';
import ActivityChart from '../../components/activity/ActivityChart';
// import { mockUserActivities } from '../../mocks/activityMock';
import { getUserData, getUserActivity } from '../../api';
import NutrientCard from '../../components/nutrientCard/NutrientCard';


import calorieIcon from '../../assets/images/energy.svg';
import proteinIcon from '../../assets/images/chicken.svg';
import carbIcon from '../../assets/images/apple.svg';
import fatIcon from '../../assets/images/cheeseburger.svg';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const {userId} = useParams();
 
  // Vérifiez userId
  console.log('User ID:', userId);

  useEffect(() => {
    // les mocks pour développement initial
    // j'utilise les mocks en fonction de l'ID utilisateur
    // const user = mockUserDatas.find((mockUserData) => mockUserData.id === +userId);
    // const activity = mockUserActivities.find((mockUserActivity) => mockUserActivity.userId === +userId);
    
    //fonction pour API
    const fetchUserData = async () => {
      try {
        const userResponse = await getUserData(userId);
        setData(userResponse.data.data);

        const activityResponse = await getUserActivity(userId);
        setActivityData(activityResponse.data.data.sessions);
      } catch (error) {
        console.error('There was an error fetching the data!', error);
      }
    };
    fetchUserData();
  }, [userId]);
    
    
    // console.log('User:', user);
    
    // if (user && activity) {
    //     setData({
    //       user:user,
    //       activity: activity.sessions
    //     });
    //   } else {
    //     console.error('Utilisateur non trouvé');
    // }
    // }, [userId]);

    
    if (!data || !activityData) {
        return <div>Loading...</div>;
    }
    const { keyData } = data;
    return (
   
        <>
          <Header />
          <Sidebar/>
          <main className='dashboard'>
          <div className="dashboard__header">
            {data ? <div className='dashboard__header__title'>
                <span className='dashboard__header__title--black'>Bonjour </span> {data.userInfos.firstName} </div> : <div>Loading...</div>} 
            <span className='dashboard__header__subtitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</span> 
            </div>
            <div className="dashboard__content">
              <div className="dashboard__chart">
                <ActivityChart data={activityData} />
              </div>
            </div>
            <section className="nutrients">
              <NutrientCard icon={calorieIcon} type="Calories" amount={`${keyData.calorieCount}kCal`} />
              <NutrientCard icon={proteinIcon} type="Protéines" amount={`${keyData.proteinCount}g`} />
              <NutrientCard icon={carbIcon} type="Glucides" amount={`${keyData.carbohydrateCount}g`} />
              <NutrientCard icon={fatIcon} type="Lipides" amount={`${keyData.lipidCount}g`} />
            </section>
          </main>
          
        </>
    
  );
};

export default Dashboard;
