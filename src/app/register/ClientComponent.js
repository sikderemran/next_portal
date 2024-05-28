'use client'
import React, { useState } from 'react';
import styles from "../../assets/style.module.css";
import { useStep } from './context';

const ClientComponent = () => {

    const [inputs, setInputs] = useState(['']);
    const [applicantName, setApplicantName] = useState(['']);
    const [applicantFatherName, setApplicantFatherName] = useState(['']);
    const [applicantMotherName, setApplicantMotherName] = useState(['']);
    const [applicantSpouseName, setApplicantSpouseName] = useState(['']);
    const [applicantEmail, setApplicantEmail] = useState(['']);
    const [applicantPhone, setApplicantPhone] = useState(['']);
    const [applicantId, setApplicantId] = useState(['']);
    const [applicantEtin, setApplicantEtin] = useState(['']);
    const [applicantBo, setApplicantBo] = useState(['']);
    const [product, setProduct] = useState(['']);
    const [applicantGender, setApplicantGender] = useState(['']);
    
    const [applicantResident, setApplicantResident] = useState(['']);
    const [applicantOccupation, setApplicantOccupation] = useState(['']);
    const [applicantNationality, setApplicantNationality] = useState(['']);
    const [applicantPresentAddress, setApplicantPresentAddress] = useState(['']);
    const [applicantPermanentAddress, setApplicantPermanentAddress] = useState(['']);

    const [nomineeName, setNomineeName] = useState(['']);
    const [sharePercentage, setSharePercentage] = useState(['']);
    const [nomineeDob, setNomineeDob] = useState(['']);
    const [nomineeFatherName, setNomineeFatherName] = useState(['']);
    const [nomineeMotherName, setNomineeMotherName] = useState(['']);
    const [nomineeSpouseName, setNomineeSpouseName] = useState(['']);
    const [nomineeEmail, setNomineeEmail] = useState(['']);
    const [nomineePhone, setNomineePhone] = useState(['']);
    const [nomineeOccupation, setNomineeOccupation] = useState(['']);
    const [nomineeId, setNomineeId] = useState(['']);
    const [nomineeRelation, setNomineeRelation] = useState(['']);
    const [nomineeMailingAddress, setNomineeMailingAddress] = useState(['']);
    
    const [applicantPhoto, setApplicantPhoto] = useState(['']);
    const [applicantSignature, setApplicantSignature] = useState(['']);
    const [applicantNid, setApplicantNid] = useState(['']);
    const [applicantBankLeaf, setApplicantBankLeaf] = useState(['']);

    const [nomineePhoto, setNomineePhoto] = useState(['']);
    const [nomineeSignature, setNomineeSignature] = useState(['']);
    const [nomineeNid, setNomineeNid] = useState(['']);
    
    const { step, setStep } = useStep();

    const addMoreHandler = (e) => {
        e.preventDefault()
        setInputs(prevInputs => [...prevInputs, '']);
    };

    const handleInputChange = (e, setStateFunction) => {
        const value = e.target.value
        setStateFunction(prevState => {
            let newState = [...prevState];
            newState = value;
            return newState;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStep((step < 4 ? step + 1 : step));
        const requestBody = JSON.stringify({ inputs });
        const response = await fetch('endpoint-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        });
    };

    const StepBackHandler = (e) => {
        e.preventDefault()
        setStep((step > 1 ? step - 1 : step));
    }
    const ValidationHandle=(e)=>{
        e.preventDefault()
        let element=e.target
        element.classList.add(styles.invalid)
        let children = element.parentElement.children;
        children[children.length - 1].textContent=element.validationMessage
    }

    return (
        <>
            <form className={`${styles.d_flex} ${styles.flex_direction_col} ${styles.flex_100}`} onSubmit={handleSubmit}>
                {
                step==1&&
                <div className={`${styles.d_flex} ${styles.flex_100} ${styles.flex_direction_col_md} ${styles.flex_justify_center} ${styles.flex_wrap} ${styles.flex_no_wrap}`}>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={applicantName}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantName)}
                            name="applicantName"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Full Name</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="email"
                            defaultValue={applicantEmail}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantEmail)}
                            name="applicantEmail"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Email Address</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={applicantPhone}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantPhone)}
                            name="applicantPhone"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Phone Number</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={applicantId}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantId)}
                            name="applicantId"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > NID / Passport</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={applicantFatherName}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantFatherName)}
                            name="applicantFatherName"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Father's Name</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={applicantMotherName}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantMotherName)}
                            name="applicantMotherName"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Mother's Name</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={`${styles.input} ${styles.optional}`}
                            type="text"
                            defaultValue={applicantSpouseName}
                            onChange={(e) => handleInputChange(e, setApplicantSpouseName)}
                            name="applicantSpouseName"
                        />
                        <label
                            className={styles.label}
                        > Spouse Name</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={`${styles.input} ${styles.optional}`}
                            type="text"
                            defaultValue={applicantEtin}
                            onChange={(e) => handleInputChange(e, setApplicantEtin)}
                            name="applicantEtin"
                        />
                        <label
                            className={styles.label}
                        > E-TIN</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={applicantBo}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantBo)}
                            name="applicantBo"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > BO Account No</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <select
                            className={styles.input}
                            type="text"
                            defaultValue={product}
                            required
                            onChange={(e) => handleInputChange(e, setProduct)}
                            name="product"
                            onInvalid={e => ValidationHandle(e)}
                        >
                        </select>
                        <label
                            className={styles.label}
                        > Product </label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <select
                            className={styles.input}
                            type="text"
                            defaultValue={applicantGender }
                            required
                            onChange={(e) => handleInputChange(e, setApplicantGender )}
                            name="applicantGender "
                            onInvalid={e => ValidationHandle(e)}
                        ></select>
                        <label
                            className={styles.label}
                        > Gender  </label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <select
                            className={styles.input}
                            type="text"
                            defaultValue={applicantResident}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantResident)}
                            name="applicantResident"
                            onInvalid={e => ValidationHandle(e)}
                        >
                        </select>
                        <label
                            className={styles.label}
                        > Resident</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <select
                            className={styles.input}
                            type="text"
                            defaultValue={applicantOccupation }
                            required
                            onChange={(e) => handleInputChange(e, setApplicantOccupation )}
                            name="applicantOccupation "
                            onInvalid={e => ValidationHandle(e)}
                        ></select>
                        <label
                            className={styles.label}
                        > Occupation </label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <select
                            className={styles.input}
                            type="text"
                            defaultValue={applicantNationality }
                            required
                            onChange={(e) => handleInputChange(e, setApplicantNationality )}
                            name="applicantNationality "
                            onInvalid={e => ValidationHandle(e)}
                        ></select>
                        <label
                            className={styles.label}
                        > Nationality </label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <textarea
                            className={styles.input}
                            type="textarea"
                            defaultValue={applicantPresentAddress }
                            required
                            onChange={(e) => handleInputChange(e, setApplicantPresentAddress )}
                            name="applicantPresentAddress "
                            onInvalid={e => ValidationHandle(e)}
                        >

                        </textarea>
                        <label
                            className={styles.label}
                        > Present Address </label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <textarea
                            className={styles.input}
                            type="textarea"
                            defaultValue={applicantPermanentAddress }
                            required
                            onChange={(e) => handleInputChange(e, setApplicantPermanentAddress )}
                            name="applicantPermanentAddress "
                            onInvalid={e => ValidationHandle(e)}
                        >
                            
                        </textarea>
                        <label
                            className={styles.label}
                        > Permanent Address</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                </div>
                }

                {
                step==2&&
                <div className={`${styles.d_flex} ${styles.flex_100} ${styles.flex_direction_col_md} ${styles.flex_justify_center} ${styles.flex_wrap} ${styles.flex_no_wrap}`}>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={nomineeName}
                            required
                            onChange={(e) => handleInputChange(e, setNomineeName)}
                            name="nomineeName"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Nominee's Full Name</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="email"
                            defaultValue={nomineeEmail}
                            required
                            onChange={(e) => handleInputChange(e, setNomineeEmail)}
                            name="nomineeEmail"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Email Address</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={nomineePhone}
                            required
                            onChange={(e) => handleInputChange(e, setNomineePhone)}
                            name="nomineePhone"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Phone Number</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={nomineeId}
                            required
                            onChange={(e) => handleInputChange(e, setNomineeId)}
                            name="nomineeId"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >NID / Passport / Birth Certificate No </label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="number"
                            defaultValue={sharePercentage}
                            required
                            onChange={(e) => handleInputChange(e, setSharePercentage)}
                            name="sharePercentage"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Share Percentage (%)</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="date"
                            defaultValue={nomineeDob}
                            required
                            onChange={(e) => handleInputChange(e, setNomineeDob)}
                            name="nomineeDob"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Nominee's Date of Birth </label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={nomineeFatherName}
                            required
                            onChange={(e) => handleInputChange(e, setNomineeFatherName)}
                            name="nomineeFatherName"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Father Name </label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={nomineeMotherName}
                            required
                            onChange={(e) => handleInputChange(e, setNomineeMotherName)}
                            name="nomineeMotherName"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Mother Name </label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={`${styles.input} ${styles.optional}`}
                            type="text"
                            defaultValue={nomineeSpouseName}
                            onChange={(e) => handleInputChange(e, setNomineeSpouseName)}
                            name="nomineeSpouseName"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Spouse Name </label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={`${styles.input}`}
                            type="text"
                            defaultValue={nomineeOccupation}
                            required
                            onChange={(e) => handleInputChange(e, setNomineeOccupation)}
                            name="nomineeOccupation"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Nominee's Occupation </label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <textarea
                            className={styles.input}
                            type="textarea"
                            defaultValue={nomineeMailingAddress }
                            required
                            onChange={(e) => handleInputChange(e, setNomineeMailingAddress )}
                            name="nomineeMailingAddress "
                            onInvalid={e => ValidationHandle(e)}
                        >
                            
                        </textarea>
                        <label
                            className={styles.label}
                        >  Mailing Address</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={`${styles.input}`}
                            type="text"
                            defaultValue={nomineeRelation}
                            required
                            onChange={(e) => handleInputChange(e, setNomineeRelation)}
                            name="nomineeRelation"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Relationship With Applicant </label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                </div>
                }

                {
                step==3&&
                <div className={`${styles.d_flex} ${styles.flex_100} ${styles.flex_direction_col_md} ${styles.flex_justify_center} ${styles.flex_wrap} ${styles.flex_no_wrap}`}>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="file"
                            defaultValue={applicantPhoto}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantPhoto)}
                            name="applicantPhoto"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Applicant Photo</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="file"
                            defaultValue={applicantSignature}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantSignature)}
                            name="applicantSignature"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Applicant Signature</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="file"
                            defaultValue={applicantNid}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantNid)}
                            name="applicantNid"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Applicant Nid</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="file"
                            defaultValue={applicantBankLeaf}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantBankLeaf)}
                            name="applicantBankLeaf"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Bank Statement/CHQ</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="file"
                            defaultValue={nomineePhoto}
                            required
                            onChange={(e) => handleInputChange(e, setNomineePhoto)}
                            name="nomineePhoto"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Nominee Photo</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="file"
                            defaultValue={nomineeSignature}
                            required
                            onChange={(e) => handleInputChange(e, setNomineeSignature)}
                            name="nomineeSignature"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Nominee Signature</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="file"
                            defaultValue={nomineeNid}
                            required
                            onChange={(e) => handleInputChange(e, setNomineeNid)}
                            name="nomineeNid"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Nominee Nid</label>
                        <span
                            className={`${styles.text_left} ${styles.invalid_message}`}
                        ></span>
                    </div>
                </div>
                }



                <div className={`${styles.formcontrol} ${styles.my_30} ${styles.d_flex} ${styles.flex_space_around} `}>
                    <button
                        onClick={StepBackHandler} className={styles.input_btn}
                    >Back</button>
                    <button
                        className={styles.input_btn}
                    >Next</button>
                </div>
            </form>
        </>
    );
};

export default ClientComponent;
