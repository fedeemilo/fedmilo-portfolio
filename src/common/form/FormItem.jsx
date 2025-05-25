const FormItem = props => {
    if (props.typeelem === 'input') return <input {...props} />

    if (props.typeelem === 'textarea') return <textarea {...props} />
}

export default FormItem
