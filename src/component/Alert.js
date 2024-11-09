import { useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Alert(props) {
    return (
        useEffect(() => {
            if (props.alert) {
                Swal.fire({
                    title: props.alert.title,
                    text: "I will responce you soon!",
                    icon: "success"
                });

            }
        }, [props.alert])

    )
}
