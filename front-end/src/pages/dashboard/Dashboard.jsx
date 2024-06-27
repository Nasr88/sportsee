import  { useEffect, useState} from 'react';
//import api from '../../api';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import { mockUserDatas} from '../../mocks/userMock';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const {userId} = useParams();
 
  // Vérifiez userId
  console.log('User ID:', userId);

  useEffect(() => {
    // les mocks pour développement initial
    // j'utilise les mocks en fonction de l'ID utilisateur
    const user = mockUserDatas.find((mockUserData) => mockUserData.id === +userId);
    console.log('User:', user);
    
    if (user) {
        setData({
          user
        });
      } else {
        console.error('Utilisateur non trouvé');
    }
}, [userId]);
if (!data) {
    return <div>Loading...</div>;
  }
  return (
   
        <>
          <Header />
          <Sidebar/>
          <main>
            {data ? <div className='profil-title'>Bonjour {data.user.userInfos.firstName} </div> : <div>Loading...</div>}  
          </main>
          
        </>
    
  );
};

export default Dashboard;
