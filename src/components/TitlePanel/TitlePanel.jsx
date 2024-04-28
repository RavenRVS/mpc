import "./TitlePanel.css"

export default function TitlePanel({text, pageType}) {
    let titleText = text;
    if (pageType === 'userList') {
        titleText = "Список пользователей"
    }
    if (pageType === 'filesList') {
        titleText += " / Мои файлы" 
    }
    

    return (
        <div className="title-panel__container">
            <h1 className="title-panel__title">{titleText}</h1>
        </div>
    )
}