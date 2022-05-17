import { useState } from 'react';
import Modal from 'react-modal';

import '../App.css';
import Header from '../components/Header';
import TrackerContainer from '../containers/TrackerContainer';
import UserContext from '../context/UserContext';
import { useModal } from '../hooks/useModal';

export const MainPage = () => {

    const [name, setName] = useState('Stranger');
    const [goal, setGoal] = useState(1);
    

    const modalResponse= useModal()

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
  
    const handleGoalChange = (e) => {
        setGoal(parseInt(e.target.value))
    }


    return (
        <>
            <Modal
                isOpen={ modalResponse.isModalOpen }
                ariaHideApp={false}
                contentLabel="User options"
            >
            
                <label htmlFor='name'>Your name: </label>
                <input type="text" name="name" placeholder={name} onChange={handleNameChange} />
                <br></br>
                <label htmlFor='goal'>Your goal: </label>
                <input type="number" min="1" name="goal" defaultValue={goal} onChange={handleGoalChange} />
                <button onClick={ modalResponse.toggleModal}>OK</button>
            </Modal>

            <UserContext.Provider value={{name ,goal}} >
                <Header/>     
                <TrackerContainer/>
            </UserContext.Provider>
        </>
    )
}

export default MainPage;
