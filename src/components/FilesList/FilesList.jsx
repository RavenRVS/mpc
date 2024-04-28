import './FilesList.css'
import RowConstructor from '../RowConstructor/RowConstructor'
import TableConstructor from '../TableConstructor/TableConctructor'

export default function FilesList({listData, titles, listType}) {
    const filesList = listData
    
    return (
        <div className={listType + "-list__container"}>
            <div className={listType + '-list__title'}>
            {Object.keys(titles).map((column, index) => (
            <RowConstructor
                key={index}
                cellNumber={index}
                column={titles[column]}
                listType={listType}
            />
            ))}
            </div>
            <div className={listType + '-list__data-container'}>
            {filesList.map((column, index) => (
                <TableConstructor 
                    key={index}
                    rowData={column}
                    listType={listType}
            />
            ))}
            </div>
        </div>
    )
}