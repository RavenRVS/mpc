import './AdminInterface.css';
import TitlePanel from '../../components/TitlePanel/TitlePanel' 
import ButtonPanel from '../../components/ButtonPanel/ButtonPanel'
import FilesList from '../../components/FilesList/FilesList';
import buttonList from '../../app/buttonList';
import usersData from '../../app/usersFromCloud';

export default function UsersControlPage() {
    const currentUser = 'Иван Иванов'

    return (
        <div className='users-control-page__container'>
        <div className="title-panel__container">
            <TitlePanel 
                text={currentUser}
                pageType='userList'
            />
        </div>
        <div className="button-panel__container">
            {Object.keys(buttonList['users_page']).map((btn, index) => (
        <ButtonPanel
            key={index}
            btnText={buttonList['users_page'][btn].btn_text}
            icon={buttonList['users_page'][btn].btn_icon}
        />
        ))}
        </div>
        <FilesList 
                listData={usersData["users_list"]}
                titles={usersData["users_title"]}
                listType={"users"}
            />
        </div>
    )   
}