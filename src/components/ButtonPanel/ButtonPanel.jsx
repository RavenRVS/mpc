import './ButtonPanel.css'

export default function ButtonPanel({btnText, icon}) {
    return (
        <div
            className={'button-panel__btn-container'} 
        >
            <img src={icon} alt='icon' className="button-panel__image"/>
            <p className='button-panel__button-text'>{ btnText }</p>
        </div>

    )
}