import FormField from './FormField';
import Button from './Button';

export default function Form(props) {
    // Todo: submit
    return (
        <form>
            <FormField title={'Username'} />
            <FormField title={'Age'} />
            <Button text={'Add User'} />
        </form>
    );
}