'use client'
import React, { useState, FormEvent } from 'react';
import styles from "../../assets/style.module.css";
import { useStep } from './context';
import Loading from '../loading';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'

const ClientComponent = () => {

    const [inputs, setInputs]                               = useState(['']);
    const [email, setEmail]                                 = useState(['']);
    const [authError,setAuthError]                          = useState()
    const [password, setPassword]                           = useState(['']);
    const { step, setStep }                                 = useStep();
    const router                                            = useRouter();
    const [isLoading,setIsLoading]                          = useState(false)

    const addMoreHandler = (e) => {
        e.preventDefault()
        setInputs(prevInputs => [...prevInputs, '']);
    };

    const handleInputChange = (index, e, setStateFunction) => {

        let element = e.target
        element.classList.add(styles.invalid)
        let children = element.parentElement.children;
        children[children.length - 1].textContent = element.validationMessage

        const value = element.value
        setStateFunction(prevState => {
            const newState = [...prevState];
            newState[index] = value;
            return newState;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setStep((step < 4 ? step + 1 : step));
        const formData = new FormData(e.currentTarget);
        const response = await signIn('credentials', {
            email: formData.get('email-0'),
            password: formData.get('password-0'),
            redirect: false,
        });
        if (!response?.error) {
            router.push('/home');
            router.refresh();
        }else{
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: 'You have entered an invalid email or password.',
                showConfirmButton: false,
                timer: 2000,
            });
            setIsLoading(false)
        }
    };

    const StepBackHandler = (e) => {
        e.preventDefault()
        setStep((step > 1 ? step - 1 : step));
    }

    const ValidationHandle = (e) => {
        e.preventDefault()
        let element = e.target
        element.classList.add(styles.invalid)
        let children = element.parentElement.children;
        children[children.length - 1].textContent = element.validationMessage
    }

    if (isLoading) {
        return (
            <Loading loading={isLoading} />
        )
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {inputs.map((input, index) => (
                    <div
                        className={`${styles.form_group} ${styles.flex_direction_col}`}
                        key={index}
                    >
                        <div
                            className={`${styles.formcontrol} ${styles.flex_direction_col}`}
                        >
                            <input
                                className={styles.input}
                                type="email"
                                defaultValue={email[index]}
                                required
                                onChange={(e) => handleInputChange(index, e, setEmail)}
                                name={`email-${index}`}
                                onInvalid={e => ValidationHandle(e)}
                            />
                            <label
                                className={styles.label}
                            >Email</label>
                            <span
                                className={`${styles.text_left} ${styles.invalid_message}`}
                            ></span>
                        </div>
                        <div className={`${styles.formcontrol} ${styles.flex_direction_col}`}>
                            <input
                                className={`${styles.input}`}
                                type="password"
                                defaultValue={password[index]}
                                required
                                onChange={(e) => handleInputChange(index, e, setPassword)}
                                name={`password-${index}`}
                                onInvalid={e => ValidationHandle(e)}
                            />
                            <label
                                className={styles.label}
                            >Password</label>
                            <span
                                className={`${styles.text_left} ${styles.invalid_message}`}
                            >
                                {authError}
                            </span>
                        </div>
                    </div>
                ))}
                {/* <div className={styles.formcontrol}>
                    <button onClick={addMoreHandler} className={styles.input_btn} >Add</button>
                </div> */}
                <div
                    className={`${styles.formcontrol} ${styles.my_30} ${styles.d_flex} ${styles.flex_space_around} `}
                >
                    <button
                        className={styles.input_btn}
                    >Sign In</button>
                </div>
            </form>
        </>
    );
};

export default ClientComponent;
