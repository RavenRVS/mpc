import RowConstructor from '../RowConstructor/RowConstructor'
import './TableConstructor.css'

export default function TableConstructor({rowData, listType}) {

    return (
        <div className={listType + '-list__row-container'}>
            <div className={listType + '-list__checkbox-container'}>
                <input type="checkbox" checked={false} readOnly={true}/>
            </div>
            <div className={listType + '-list__row'}>
            {Object.keys(rowData).map((column, index) => (
            <RowConstructor
                key={index}
                cellNumber={index}
                column={rowData[column]}
                listType={listType}
            />
            ))}
            </div>
        </div>
    )
}