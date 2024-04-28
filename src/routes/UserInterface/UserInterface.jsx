import ButtonPanel from '../../components/ButtonPanel/ButtonPanel';
import buttonList from '../../app/buttonList';
import TitlePanel from '../../components/TitlePanel/TitlePanel';
import FilesList from '../../components/FilesList/FilesList';
import "./UserInterface.css"
import filesData from '../../app/filesFromCloud';
import { getPerson, isAdmin } from '../../app/apiRequests';
import { redirect } from 'react-router-dom';

export async function loader() {
    const check = await isAdmin();
    if (check.admin) {
      return redirect('/admin');
    }
    const person = await getPerson();
    if (person.error) {
      return redirect('/');
    }
    return { person };
  }


export default function UserInterface() {
    const currentUser = 'Иван Иванов'
    const listData = filesData

    return (
        <div className='user-interface__container'>
            <div className="title-panel__container">
                <TitlePanel 
                    text={currentUser}
                    pageType='filesList'
                />
            </div>
            <div className="button-panel__container">
                {Object.keys(buttonList['files_page']).map((btn, index) => (
            <ButtonPanel
                key={index}
                btnText={buttonList['files_page'][btn].btn_text}
                icon={buttonList['files_page'][btn].btn_icon}
            />
            ))}
            </div>
            <FilesList 
                listData={listData["files_list"]}
                titles={listData["files_title"]}
                listType={"files"}
            />
        </div>
    )
}
