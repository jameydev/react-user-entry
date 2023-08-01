export default function FormField(props) {
    return (
        <>
            <label for={props.title}>{props.title}</label>
            <input type="text" />
        </>
    );
}