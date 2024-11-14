import { useEffect } from 'react';
import Swal from 'sweetalert2';
// import 'sweetalert2/dist/dark.css';

export default function Alert(props) {
    return (
        useEffect(() => {
            if (props.alert) {
                Swal.fire({
                    title: props.alert.title,
                    text: "I will responce you soon!",
                    icon: "success",
                });

            }
        }, [props.alert])

    )
}
