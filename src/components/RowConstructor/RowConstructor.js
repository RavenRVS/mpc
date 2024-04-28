import './RowConstructor.css'

export default function RowConstructor({column, cellNumber, listType}) {
    return (
        <div 
            className={listType + '-cell-' + cellNumber} 
        >
            { column }
        </div>

    )
}