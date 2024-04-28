import "./modalFieldConstructor.css"

export default function modalFieldConstructor({ modal_type, field, field_data }) {
    const placeholder_text = "Введите "+field_data.text
    return (
        <>
            <input 
                id={modal_type+field}
                type={field_data.type}
                name={field}
                className={modal_type+"__filed "+field+"-field"}
                placeholder={placeholder_text}
            />
        </>
    )
}