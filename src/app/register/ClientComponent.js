'use client'
import React, { useState } from 'react';
import styles from "../../assets/style.module.css";
import { useStep } from './context';
import Loading from '../loading';
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const ClientComponent = () => {

    const [isLoading,setIsLoading]      = useState(false)
    const router                        = useRouter();
    const { step, setStep }             = useStep();

    const [productList, setProductList]             = useState([]);
    const [residentList, setResidentList]           = useState([]);
    const [genderList, setGenderList]               = useState([]);
    const [nationalityList, setNationalityList]     = useState([]);
    const [occupationList, setOccupationList]       = useState([]);
    const [relationshipList, setRelationshipList]   = useState([]);
    const [accountList, setAccountList]             = useState([]);
    const [bankList, setBankList]                   = useState([]);
    const [paymentTypeList, setPaymentTypeList]     = useState([]);

    const [verifyOtp, setVerifyOtp] = useState();
    const [applicantEmail, setApplicantEmail] = useState();
    const [applicantPhone, setApplicantPhone] = useState();
    const [termsCondition, setTermsCondition] = useState();
    

    const [applicantName, setApplicantName] = useState();
    const [applicantDOB, setApplicantDOB] = useState();
    const [applicantFatherName, setApplicantFatherName] = useState();
    const [applicantMotherName, setApplicantMotherName] = useState();
    const [applicantSpouseName, setApplicantSpouseName] = useState();
    const [applicantId, setApplicantId] = useState();
    const [applicantEtin, setApplicantEtin] = useState();
    const [applicantBo, setApplicantBo] = useState();
    const [product, setProduct] = useState();
    const [applicantGender, setApplicantGender] = useState();
    const [applicantResident, setApplicantResident] = useState();
    const [applicantOccupation, setApplicantOccupation] = useState();
    const [applicantNationality, setApplicantNationality] = useState();
    const [applicantPresentAddress, setApplicantPresentAddress] = useState();
    const [applicantPermanentAddress, setApplicantPermanentAddress] = useState();


    const [verifyOtpError, setVerifyOtpError] = useState();

    const [applicantNameError, setApplicantNameError] = useState();
    const [applicantDOBError, setApplicantDOBError] = useState();
    const [applicantFatherNameError, setApplicantFatherNameError] = useState();
    const [applicantMotherNameError, setApplicantMotherNameError] = useState();
    const [applicantSpouseNameError, setApplicantSpouseNameError] = useState();
    const [applicantEmailError, setApplicantEmailError] = useState();
    const [applicantPhoneError, setApplicantPhoneError] = useState();
    const [termsConditionError, setTermsConditionError] = useState();
    const [applicantIdError, setApplicantIdError] = useState();
    const [applicantEtinError, setApplicantEtinError] = useState();
    const [applicantBoError, setApplicantBoError] = useState();
    const [productError, setProductError] = useState();
    const [applicantGenderError, setApplicantGenderError] = useState();
    const [applicantResidentError, setApplicantResidentError] = useState();
    const [applicantOccupationError, setApplicantOccupationError] = useState();
    const [applicantNationalityError, setApplicantNationalityError] = useState();
    const [applicantPresentAddressError, setApplicantPresentAddressError] = useState();
    const [applicantPermanentAddressError, setApplicantPermanentAddressError] = useState();

    const [nomineeName, setNomineeName] = useState();
    const [sharePercentage, setSharePercentage] = useState();
    const [nomineeDob, setNomineeDob] = useState();
    const [nomineeFatherName, setNomineeFatherName] = useState();
    const [nomineeMotherName, setNomineeMotherName] = useState();
    const [nomineeSpouseName, setNomineeSpouseName] = useState();
    const [nomineeEmail, setNomineeEmail] = useState();
    const [nomineePhone, setNomineePhone] = useState();
    const [nomineeOccupation, setNomineeOccupation] = useState();
    const [nomineeId, setNomineeId] = useState();
    const [nomineeRelation, setNomineeRelation] = useState();
    const [nomineeMailingAddress, setNomineeMailingAddress] = useState();




    const [account, setAccount]                 = useState();
    const [bank, setBank]                       = useState();
    const [instrumentDate, setInstrumentDate]   = useState();
    const [instrumentNo, setInstrumentNo]       = useState();
    const [paymentType, setPaymentType]         = useState();
    const [depositSlip, setDepositSlip]         = useState();
    const [depositAmount, setDepositAmount]     = useState();

    
    const [accountError, setAccountError]                   = useState();
    const [bankError, setBankError]                         = useState();
    const [instrumentDateError, setInstrumentDateError]     = useState();
    const [instrumentNoError, setInstrumentNoError]         = useState();
    const [paymentTypeError, setPaymentTypeError]           = useState();
    const [depositSlipError, setDepositSlipError]           = useState();
    const [depositAmountError, setDepositAmountError]       = useState();




    const [nomineeNameError, setNomineeNameError] = useState();
    const [sharePercentageError, setSharePercentageError] = useState();
    const [nomineeDobError, setNomineeDobError] = useState();
    const [nomineeFatherNameError, setNomineeFatherNameError] = useState();
    const [nomineeMotherNameError, setNomineeMotherNameError] = useState();
    const [nomineeSpouseNameError, setNomineeSpouseNameError] = useState();
    const [nomineeEmailError, setNomineeEmailError] = useState();
    const [nomineePhoneError, setNomineePhoneError] = useState();
    const [nomineeOccupationError, setNomineeOccupationError] = useState();
    const [nomineeIdError, setNomineeIdError] = useState();
    const [nomineeRelationError, setNomineeRelationError] = useState();
    const [nomineeMailingAddressError, setNomineeMailingAddressError] = useState();
    
    const [applicantPhoto, setApplicantPhoto] = useState();
    const [applicantSignature, setApplicantSignature] = useState();
    const [applicantNidPhoto, setApplicantNidPhoto] = useState();
    const [applicantBankLeaf, setApplicantBankLeaf] = useState();

    const [applicantPhotoError, setApplicantPhotoError] = useState();
    const [applicantSignatureError, setApplicantSignatureError] = useState();
    const [applicantNidPhotoError, setApplicantNidPhotoError] = useState();
    const [applicantBankLeafError, setApplicantBankLeafError] = useState();

    const [nomineePhoto, setNomineePhoto] = useState();
    const [nomineeSignature, setNomineeSignature] = useState();
    const [nomineeNidPhoto, setNomineeNidPhoto] = useState();

    const [nomineePhotoError, setNomineePhotoError] = useState();
    const [nomineeSignatureError, setNomineeSignatureError] = useState();
    const [nomineeNidPhotoError, setNomineeNidPhotoError] = useState();

    const [investorDetailsId,setInvestorDetailsId]  = useState();
    const [nomineeInfoId,setNomineeInfoId]  = useState();

    
    

    
    const handleInputChange = (e, setStateFunction) => {
        let element = e.target
        element.classList.add(styles.invalid)
        let children = element.parentElement.children;
        children[children.length - 1].textContent = element.validationMessage
        
        if(element.type=='file'){
            setStateFunction(element.files[0])
        }else{
            setStateFunction(element.value)
        }
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData();
        if(step==1){
            formData.append('email',applicantEmail)
            formData.append('contact_number',applicantPhone)
        }else if(step==2){
            formData.append('otp_code',verifyOtp)
        }else if(step==3){
            formData.append('email',applicantEmail)
            formData.append('contact_number',applicantPhone)
            formData.append('investor_name',applicantName)
            formData.append('date_of_birth',applicantDOB)
            formData.append('product_id',product)
            formData.append('gender',applicantGender)
            formData.append('father_name',applicantFatherName)
            formData.append('mother_name',applicantMotherName)
            formData.append('spouse_name',applicantSpouseName)
            formData.append('residency',applicantResident)
            formData.append('nid_number',applicantId)
            formData.append('occupation_id',applicantOccupation)
            formData.append('nationality',applicantNationality)
            formData.append('e_tin',applicantEtin)
            formData.append('bo_account_number',applicantBo)
            formData.append('present_address',applicantPermanentAddress)
            formData.append('permanent_address',applicantPermanentAddress)
        }else if(step==4){
            formData.append('investor_details_id',investorDetailsId)
            formData.append('nominee_full_name',nomineeName)
            formData.append('nominee_share',sharePercentage)
            formData.append('nominee_date_of_birth',nomineeDob)
            formData.append('nominee_father_name',nomineeFatherName)
            formData.append('nominee_mother_name',nomineeMotherName)
            formData.append('nominee_spouse_name',applicantSpouseName)
            formData.append('nominee_email',nomineeEmail)
            formData.append('nominee_contact_number',nomineePhone)
            formData.append('nominee_nid',nomineeId)
            formData.append('nominee_occupation_id',nomineeOccupation)
            formData.append('nominee_relationship_id',nomineeRelation)
            formData.append('nominee_mailing_address',nomineeMailingAddress)
        }else if(step==5){
            formData.append('investor_details_id',investorDetailsId)
            formData.append('deposit_account_id',account)
            formData.append('bank_id',bank)
            formData.append('deposit_date',instrumentDate)
            formData.append('deposit_instrument_no',instrumentNo)
            formData.append('payment_type',paymentType)
            formData.append('deposit_slip',depositSlip)
            formData.append('deposit_amount',depositAmount)
        }
        else if(step==6){
            formData.append('investor_details_id',investorDetailsId)
            formData.append('nominee_info_id',nomineeInfoId)
            formData.append('investor_photo',applicantPhoto)
            formData.append('investor_nid_photo',applicantNidPhoto)
            formData.append('investor_signature',applicantSignature)
            formData.append('investor_cheque_photo',applicantBankLeaf)
            formData.append('nominee_photo',nomineePhoto)
            formData.append('nominee_nid_photo',nomineeNidPhoto)
            formData.append('nominee_signature',nomineeSignature)
        }
        const url = process.env.NEXT_PUBLIC_API_URL + '/registation/'+step;
       
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            const data = await response.json();

            if(data.status=='success'){
                setStep((step < 6 ? step + 1 : step));
                if(step==3){
                    setInvestorDetailsId(data.investor_details_id)
                }else if(step==2){
                    fetchProductList()
                    fetchOcupationList()
                    fetchGenderList()
                    fetchResidentList()
                    fetchNationalityList()
                    fetchRelationShipList()
                }else if(step==4){
                    setNomineeInfoId(data.nominee_info_id)
                    fetchAccountList()
                    fetchBankList()
                    fetchPaymentType()
                }
                if(step==6){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1500,
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                            router.push('/login');
                            router.refresh();
                        }
                    });
                }else{
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: data.message,
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }
                
            }else if(data.errors != undefined){
                if(step==1){
                    var setters = {
                        email: setApplicantEmailError,
                        contact_number: setApplicantPhoneError,
                    };
                }else if(step==2){
                    var setters = {
                        otp_code: setVerifyOtpError
                    };
                }else if(step==3){
                    var setters = {
                        investor_name: setApplicantNameError,
                        date_of_birth: setApplicantDOBError,
                        father_name: setApplicantFatherNameError,
                        mother_name: setApplicantMotherNameError,
                        spouse_name: setApplicantSpouseNameError,
                        nid_number: setApplicantIdError,
                        e_tin: setApplicantEtinError,
                        bo_account_number: setApplicantBoError,
                        product_id: setProductError,
                        gender: setApplicantGenderError,
                        residency: setApplicantResidentError,
                        occupation_id: setApplicantOccupationError,
                        nationality: setApplicantNationalityError,
                        present_address: setApplicantPresentAddressError,
                        permanent_address: setApplicantPermanentAddressError
                    };
                }else if(step==4){
                    var setters = {
                        nominee_full_name: setNomineeNameError,
                        nominee_share: setSharePercentageError,
                        nominee_date_of_birth: setNomineeDobError,
                        nominee_father_name: setNomineeFatherNameError,
                        nominee_mother_name: setNomineeMotherNameError,
                        nominee_spouse_name: setNomineeSpouseNameError,
                        nominee_email: setNomineeEmailError,
                        nominee_contact_number: setNomineePhoneError,
                        nominee_nid: setNomineeIdError,
                        nominee_occupation_id: setNomineeOccupationError,
                        nominee_relationship_id: setNomineeRelationError,
                        nominee_mailing_address: setNomineeMailingAddressError
                    };
                }else if(step==5){
                    var setters = {
                        deposit_account_id: setAccountError,
                        bank_id: setBankError,
                        deposit_date: setInstrumentDateError,
                        deposit_instrument_no: setInstrumentNoError,
                        payment_type: setPaymentTypeError,
                        deposit_slip: setDepositSlip,
                        deposit_amount: setDepositAmountError
                    };
                }else if(step==6){
                    var setters = {
                        investor_photo: setApplicantPhotoError,
                        investor_nid_photo: setApplicantNidPhotoError,
                        investor_signature: setApplicantSignatureError,
                        investor_cheque_photo: setApplicantBankLeafError,
                        nominee_photo: setNomineePhotoError,
                        nominee_nid_photo: setNomineeNidPhotoError,
                        nominee_signature: setNomineeSignatureError,
                    };
                }

                Object.entries(data.errors).forEach(([key, value]) => {
                    const setterName = key;
                    const setterFunction = setters[setterName];
                    if (setterFunction) {
                        setterFunction(value[0]);
                    }
                });
            }else if(data.status=='error'){
                throw new Error(data.message);
            }else {
                throw new Error(data.message);
            }

        } catch(error){
            if(error instanceof TypeError){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: 'The server is not responding. Please wait for a moment.',
                    showConfirmButton: false,
                    timer: 2000,
                });
            }else{
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: error.message,
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        } finally{
            setIsLoading(false)
        }
        
    };



    const fetchProductList = async () => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/product-list';
            const res = await fetch(url, {
                method: "GET",
                headers: { 
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            if(data.status=='success'){
                setProductList(data.product_ist)
            }
        } catch (error) {
            if(error.name=='TypeError'){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: 'The server is not responding. Please wait for a moment.',
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
        } finally {
            setIsLoading(false)
        }
    };
    
    const fetchOcupationList = async () => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/occupation-list';
            const res = await fetch(url, {
                method: "GET",
                headers: { 
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            if(data.status=='success'){
                setOccupationList(data.occupation_ist)
            }
        } catch (error) {
            if(error.name=='TypeError'){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: 'The server is not responding. Please wait for a moment.',
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
        } finally {
            setIsLoading(false)
        }
    };

    const fetchGenderList = async () => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/gender-list';
            const res = await fetch(url, {
                method: "GET",
                headers: { 
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            if(data.status=='success'){
                setGenderList(data.gender_ist)
            }
        } catch (error) {
            if(error.name=='TypeError'){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: 'The server is not responding. Please wait for a moment.',
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
        } finally {
            setIsLoading(false)
        }
    };

    const fetchResidentList = async () => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/resident-list';
            const res = await fetch(url, {
                method: "GET",
                headers: { 
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            if(data.status=='success'){
                setResidentList(data.resident_ist)
            }
        } catch (error) {
            if(error.name=='TypeError'){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: 'The server is not responding. Please wait for a moment.',
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
        } finally {
            setIsLoading(false)
        }
    };

    const fetchNationalityList = async () => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/nationality-list';
            const res = await fetch(url, {
                method: "GET",
                headers: { 
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            if(data.status=='success'){
                setNationalityList(data.nationality_ist)
            }
        } catch (error) {
            if(error.name=='TypeError'){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: 'The server is not responding. Please wait for a moment.',
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
        } finally {
            setIsLoading(false)
        }
    };

    const fetchRelationShipList = async () => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/relationship-list';
            const res = await fetch(url, {
                method: "GET",
                headers: { 
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            if(data.status=='success'){
                setRelationshipList(data.relationshipList)
            }
        } catch (error) {
            if(error.name=='TypeError'){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: 'The server is not responding. Please wait for a moment.',
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
        } finally {
            setIsLoading(false)
        }
    };

    const fetchAccountList = async () => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/deposit-account-list';
            const res = await fetch(url, {
                method: "GET",
                headers: { 
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            if(data.status=='success'){
                setAccountList(data.account_list)
            }
        } catch (error) {
            if(error.name=='TypeError'){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: 'The server is not responding. Please wait for a moment.',
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
        }
    };

    const fetchBankList = async () => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/bank-list';
            const res = await fetch(url, {
                method: "GET",
                headers: { 
                    "Accept": "application/json",
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            if(data.status=='success'){
                setBankList(data.bank_list)
            }
        } catch (error) {
            if(error.name=='TypeError'){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: 'The server is not responding. Please wait for a moment.',
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
        }
    };

    const fetchPaymentType = async () => {
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + '/payment-type-list';
            const res = await fetch(url, {
                method: "GET",
                headers: { 
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            if(data.status=='success'){
                setPaymentTypeList(data.payment_list)
            }
        } catch (error) {
            if(error.name=='TypeError'){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: 'The server is not responding. Please wait for a moment.',
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
        }
    };

    const StepBackHandler = (e) => {
        e.preventDefault()
        setStep((step > 1 ? step - 1 : step));
    }

    const skipDeposit=(e)=>{
        e.preventDefault()
        setStep((step < 6 ? step + 1 : step));
    }

    const ValidationHandle=(e)=>{
        e.preventDefault()
        let element=e.target
        element.classList.add(styles.invalid)
        let children = element.parentElement.children;
        children[children.length - 1].textContent=element.validationMessage
    }

    if (isLoading) {
        return (
            <Loading loading={isLoading} />
        )
    }

    return (
        <>
            <form className={`${styles.d_flex} ${styles.flex_direction_col} ${styles.flex_100}`} onSubmit={handleSubmit}>
                {
                step==1&&
                <div className={`${styles.d_flex} ${styles.flex_100} ${styles.flex_direction_col_md} ${styles.flex_justify_center} ${styles.flex_wrap} ${styles.flex_no_wrap}`}>
                    <div className={`${styles.formcontrol} ${styles.flex_100}`}>
                        <b>Please keep the soft copy / picture of the following documents ready:</b>
                        <ul className={`${styles.list_disc} ${styles.ms_15}`}>
                            <li>Applicant's and nominee's natonal ID card.</li>
                            <li>Color photo and signature of the  applicant(s) and nominess(s).</li>
                            <li>Bank cheque leaf of the applicant.</li>
                            <li>Applicant's E-TIN certificate (To enjoy tax benifit).</li>
                            <li>Passport copy for Non-resident Bangladeshi (NRB).</li>
                        </ul>
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
                        {
                            applicantEmailError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantEmailError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            applicantPhoneError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantPhoneError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_100} ${styles.text_center}`}>
                        <input
                            className={styles.input}
                            type="checkbox"
                            defaultValue={termsCondition}
                            required
                            onChange={(e) => handleInputChange(e, setTermsCondition)}
                            name="termsCondition"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.w_100}`}
                        > 
                            I accept the <Link href="/termscondition">Terms & Conditions</Link>
                        </label>
                        
                        {
                            termsConditionError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid} `}
                                >
                                    {termsConditionError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                            defaultValue={verifyOtp}
                            required
                            onChange={(e) => handleInputChange(e, setVerifyOtp)}
                            name="verifyOtp"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Verify OTP</label>
                        {
                            verifyOtpError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {verifyOtpError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                </div>
                }

                {
                step==3&&
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
                        {
                            applicantNameError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantNameError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="date"
                            defaultValue={applicantDOB}
                            required
                            onChange={(e) => handleInputChange(e, setApplicantDOB)}
                            name="applicantDOB"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Applicant DOB</label>
                        {
                            applicantDOBError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantDOBError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="email"
                            value={applicantEmail}
                            onChange={(e) => e.preventDefault()}
                            name="applicantEmail"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Email Address</label>
                        {
                            applicantEmailError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantEmailError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            value={applicantPhone}
                            onChange={(e) => e.preventDefault()}
                            name="applicantPhone"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        > Phone Number</label>
                        {
                            applicantPhoneError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantPhoneError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            applicantIdError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantIdError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            applicantFatherNameError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantFatherNameError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            applicantMotherNameError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantMotherNameError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            applicantSpouseNameError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantSpouseNameError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            applicantEtinError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantEtinError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            applicantBoError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantBoError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <select
                            className={styles.input}
                            defaultValue=""
                            required
                            onChange={(e) => handleInputChange(e, setProduct)}
                            name="product"
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                            {
                                productList && Object.keys(productList).length > 0?
                                (
                                    productList.map((data,key)=>{
                                        return <option 
                                                    value={data.template_id} 
                                                    key={key}
                                                >
                                                    {data.product_name}
                                                </option>
                                    })
                                ):
                                (
                                    <option disabled>Data not available</option>
                                )
                                
                            }
                        </select>
                        <label
                            className={styles.label}
                        > Product </label>
                        {
                            productError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {productError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <select
                            className={styles.input}
                            defaultValue=""
                            required
                            onChange={(e) => handleInputChange(e, setApplicantGender )}
                            name="applicantGender "
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                            {
                                genderList && Object.keys(genderList).length > 0?
                                (
                                    genderList.map((data,key)=>{
                                        return <option 
                                                    value={data.gender_id} 
                                                    key={key}
                                                >
                                                    {data.gender}
                                                </option>
                                    })
                                ):
                                (
                                    <option disabled>Data not available</option>
                                )
                                
                            }
                        </select>
                        <label
                            className={styles.label}
                        > Gender  </label>
                        {
                            applicantGenderError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantGenderError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <select
                            className={styles.input}
                            defaultValue=""
                            required
                            onChange={(e) => handleInputChange(e, setApplicantResident)}
                            name="applicantResident"
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                            {
                                residentList && Object.keys(residentList).length > 0?
                                (
                                    residentList.map((data,key)=>{
                                        return <option 
                                                    value={data.resident_id} 
                                                    key={key}
                                                >
                                                    {data.resident}
                                                </option>
                                    })
                                ):
                                (
                                    <option disabled>Data not available</option>
                                )
                                
                            }
                        </select>
                        <label
                            className={styles.label}
                        > Resident</label>
                        {
                            applicantResidentError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantResidentError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <select
                            className={styles.input}
                            defaultValue=""
                            required
                            onChange={(e) => handleInputChange(e, setApplicantOccupation )}
                            name="applicantOccupation "
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                            {
                                occupationList && Object.keys(occupationList).length > 0?
                                (
                                    occupationList.map((data,key)=>{
                                        return <option 
                                                    value={data.occupation_id} 
                                                    key={key}
                                                >
                                                    {data.occupation}
                                                </option>
                                    })
                                ):
                                (
                                    <option disabled>Data not available</option>
                                )
                                
                            }
                        </select>
                        
                        <label
                            className={styles.label}
                        > Occupation </label>
                        {
                            applicantOccupationError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantOccupationError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <select
                            className={styles.input}
                            defaultValue=""
                            required
                            onChange={(e) => handleInputChange(e, setApplicantNationality )}
                            name="applicantNationality "
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                            {
                                nationalityList && Object.keys(nationalityList).length > 0?
                                (
                                    nationalityList.map((data,key)=>{
                                        return <option 
                                                    value={data.nationality_id} 
                                                    key={key}
                                                >
                                                    {data.nationality}
                                                </option>
                                    })
                                ):
                                (
                                    <option disabled>Data not available</option>
                                )
                                
                            }
                        </select>
                        <label
                            className={styles.label}
                        > Nationality </label>
                        {
                            applicantNationalityError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantNationalityError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            applicantPresentAddressError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantPresentAddressError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            applicantPermanentAddressError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantPermanentAddressError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_100}`}>
                        <p className={`${styles.text_color_red} ${styles.text_size_13}`}>
                            Note:Benefit from a 5% cash dividend exemption by adding your Taxpayer 
                            Identification Number (TIN) to your BO Account.
                        </p>
                    </div>
                </div>
                }

                {
                step==4&&
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
                        {
                            nomineeNameError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {nomineeNameError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            nomineeEmailError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {nomineeEmailError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            nomineePhoneError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {nomineePhoneError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            nomineeIdError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {nomineeIdError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            sharePercentageError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {sharePercentageError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            nomineeDobError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {nomineeDobError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            nomineeFatherNameError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {nomineeFatherNameError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            nomineeMotherNameError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {nomineeMotherNameError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            nomineeSpouseNameError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {nomineeSpouseNameError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <select
                            className={styles.input}
                            defaultValue=""
                            required
                            onChange={(e) => handleInputChange(e, setNomineeOccupation )}
                            name="nomineeOccupation "
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                            {
                                occupationList && Object.keys(occupationList).length > 0?
                                (
                                    occupationList.map((data,key)=>{
                                        return <option 
                                                    value={data.occupation_id} 
                                                    key={key}
                                                >
                                                    {data.occupation}
                                                </option>
                                    })
                                ):
                                (
                                    <option disabled>Data not available</option>
                                )
                                
                            }
                        </select>
                        <label
                            className={styles.label}
                        >Nominee's Occupation </label>
                        {
                            nomineeOccupationError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {nomineeOccupationError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
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
                        {
                            nomineeMailingAddressError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {nomineeMailingAddressError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <select
                            className={styles.input}
                            defaultValue=""
                            required
                            onChange={(e) => handleInputChange(e, setNomineeRelation )}
                            name="nomineeRelation"
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                            {
                                relationshipList && Object.keys(relationshipList).length > 0?
                                (
                                    relationshipList.map((data,key)=>{
                                        return <option 
                                                    value={data.relation_id} 
                                                    key={key}
                                                >
                                                    {data.relation}
                                                </option>
                                    })
                                ):
                                (
                                    <option disabled>Data not available</option>
                                )
                                
                            }
                        </select>
                        <label
                            className={styles.label}
                        >Relationship With Applicant </label>
                        {
                            nomineeRelationError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {nomineeRelationError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                </div>
                }

                {
                step==5&&
                <div className={`${styles.d_flex} ${styles.flex_100} ${styles.flex_direction_col_md} ${styles.flex_justify_center} ${styles.flex_wrap} ${styles.flex_no_wrap}`}>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <select
                            className={styles.input}
                            defaultValue=""
                            required
                            onChange={(e) => handleInputChange(e, setAccount)}
                            name={`account`}
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                        {
                                accountList && Object.keys(accountList).length > 0?
                                (
                                    accountList.map((data,key)=>{
                                        return <option 
                                                    value={data.account_details_id} 
                                                    key={key}
                                                >
                                                    {data.account_name}
                                                </option>
                                    })
                                ):
                                (
                                    <option disabled>Data not available</option>
                                )
                            
                        }
                        </select>
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Deposit Account Name</label>
                        {
                            accountError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {accountError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <select
                            className={styles.input}
                            defaultValue=""
                            required
                            onChange={(e) => handleInputChange(e, setBank)}
                            name={`bank`}
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                        {
                                bankList && Object.keys(bankList).length > 0?
                                (
                                    bankList.map((data,key)=>{
                                        return <option 
                                                    value={data.org_id} 
                                                    key={data.org_id}
                                                >
                                                    {data.org_name}
                                                </option>
                                    })
                                ):
                                (
                                    <option disabled>Data not available</option>
                                )
                            
                        }
                        </select>
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Bank Name</label>
                        {
                            bankError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {bankError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="date"
                            defaultValue={instrumentDate}
                            required
                            onChange={(e) => handleInputChange(e, setInstrumentDate)}
                            name={`instrumentDate`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Instrument Date</label>
                        {
                            instrumentDateError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {instrumentDateError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={instrumentNo}
                            required
                            onChange={(e) => handleInputChange(e, setInstrumentNo)}
                            name={`instrumentNo`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Instrument No.</label>
                        {
                            instrumentNoError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {instrumentNoError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <select
                            className={styles.input}
                            defaultValue=""
                            required
                            onChange={(e) => handleInputChange(e, setPaymentType)}
                            name={`paymentType`}
                            onInvalid={e => ValidationHandle(e)}
                        >
                            <option disabled></option>
                        {
                                paymentTypeList?
                                (
                                    Object.entries(paymentTypeList).map(([key, value]) => {
                                        return <option 
                                            value={key} 
                                            key={key}
                                        >
                                            {value}
                                        </option>
                                    })
                                ):
                                (
                                    <option disabled>Data not available</option>
                                )
                            
                        }
                        </select>
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        >Payment Type</label>
                        {
                            paymentTypeError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {paymentTypeError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="file"
                            required
                            onChange={(e) => handleInputChange(e, setDepositSlip)}
                            name="depositSlip"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Deposit Slip</label>
                        {
                            depositSlipError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {depositSlipError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="text"
                            defaultValue={depositAmount}
                            required
                            onChange={(e) => handleInputChange(e, setDepositAmount)}
                            name={`depositAmount`}
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={`${styles.label} ${styles.text_size_13}`}
                        > Deposit Amount </label>
                        {
                            depositAmountError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {depositAmountError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                </div>
                }

                {
                step==6&&
                <div className={`${styles.d_flex} ${styles.flex_100} ${styles.flex_direction_col_md} ${styles.flex_justify_center} ${styles.flex_wrap} ${styles.flex_no_wrap}`}>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="file"
                            required
                            onChange={(e) => handleInputChange(e, setApplicantPhoto)}
                            name="applicantPhoto"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Applicant Photo</label>
                        {
                            applicantPhotoError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantPhotoError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="file"
                            required
                            onChange={(e) => handleInputChange(e, setApplicantSignature)}
                            name="applicantSignature"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Applicant Signature</label>
                        {
                            applicantSignatureError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantSignatureError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="file"
                            required
                            onChange={(e) => handleInputChange(e, setApplicantNidPhoto)}
                            name="applicantNidPhoto"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Applicant Nid</label>
                        {
                            applicantNidPhotoError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantNidPhotoError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="file"
                            required
                            onChange={(e) => handleInputChange(e, setApplicantBankLeaf)}
                            name="applicantBankLeaf"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Bank Statement/CHQ</label>
                        {
                            applicantBankLeafError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {applicantBankLeafError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="file"
                            required
                            onChange={(e) => handleInputChange(e, setNomineePhoto)}
                            name="nomineePhoto"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Nominee Photo</label>
                        {
                            nomineePhotoError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {nomineePhotoError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="file"
                            required
                            onChange={(e) => handleInputChange(e, setNomineeSignature)}
                            name="nomineeSignature"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Nominee Signature</label>
                        {
                            nomineeSignatureError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {nomineeSignatureError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                    <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                        <input
                            className={styles.input}
                            type="file"
                            required
                            onChange={(e) => handleInputChange(e, setNomineeNidPhoto)}
                            name="nomineeNidPhoto"
                            onInvalid={e => ValidationHandle(e)}
                        />
                        <label
                            className={styles.label}
                        >Nominee Nid</label>
                        {
                            nomineeNidPhotoError?
                            (
                                <span
                                    className={`${styles.text_left} ${styles.back_invalid}`}
                                >
                                    {nomineeNidPhotoError}
                                </span>
                            ):
                            (
                                <span
                                    className={`${styles.text_left} ${styles.invalid_message}`}
                                >
                                </span>
                            )
                        }
                    </div>
                </div>
                }

    
                <div className={`${styles.formcontrol} ${styles.my_30} ${styles.d_flex} ${styles.flex_space_around} `}>
                    <button
                        onClick={StepBackHandler} className={styles.input_btn}
                    >Back</button>
                    {
                        step==2&&
                        <button
                        className={styles.input_btn}>
                            Resend OTP
                        </button>
                    }

                    {
                        step==5&&
                        <button
                            className={styles.input_btn}
                            onClick={skipDeposit}
                        >
                            Skip
                        </button>
                    }
                    <button
                        className={styles.input_btn}
                    >Next</button>
                </div>
                {
                    step==5&&
                    <>
                    <div className={`${styles.d_flex} ${styles.flex_100} ${styles.flex_direction_col_md} ${styles.flex_justify_center} ${styles.flex_wrap} ${styles.flex_no_wrap}`}>
                    <p className={`${styles.text_color_red}`}>Dear Esteemed Investor,You may conveniently deposit funds into the following bank accounts. </p>
                    </div>
                    <div className={`${styles.d_flex} ${styles.flex_100} ${styles.flex_direction_col_md} ${styles.flex_justify_center} ${styles.flex_wrap} ${styles.flex_no_wrap}`}>
                        <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                            <table className={`${styles.w_100} ${styles.mb_20}`}>
                                <thead>
                                    <tr>
                                        <th colSpan={2} className={`${styles.text_center}`}>SCB</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={`${styles.text_right}`}>Account Name</td>
                                        <td className={`${styles.text_left}`}>BRAC EPL INVESTMENTS LIMITED</td>
                                    </tr>
                                    <tr>
                                        <td className={`${styles.text_right}`}>A/C No:</td>
                                        <td className={`${styles.text_left}`}>01619820102</td>
                                    </tr>
                                    <tr>
                                        <td className={`${styles.text_right}`}>Branch</td>
                                        <td className={`${styles.text_left}`}>Motijheel</td>
                                    </tr>
                                    <tr>
                                        <td className={`${styles.text_right}`}>Branch</td>
                                        <td className={`${styles.text_left}`}>215274247</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                            <table className={`${styles.w_100} ${styles.mb_20}`}>
                                <thead>
                                    <tr>
                                        <th colSpan={2} className={`${styles.text_center}`}>BRAC BANK PLC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={`${styles.text_right}`}>Account Name</td>
                                        <td className={`${styles.text_left}`}>BRAC EPL INVESTMENTS LIMITED</td>
                                    </tr>
                                    <tr>
                                        <td className={`${styles.text_right}`}>A/C No:</td>
                                        <td className={`${styles.text_left}`}>1501201657209002</td>
                                    </tr>
                                    <tr>
                                        <td className={`${styles.text_right}`}>Branch</td>
                                        <td className={`${styles.text_left}`}>Gulshan</td>
                                    </tr>
                                    <tr>
                                        <td className={`${styles.text_right}`}>Branch</td>
                                        <td className={`${styles.text_left}`}>060261726</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                            <table className={`${styles.w_100} ${styles.mb_20}`}>
                                <thead>
                                    <tr>
                                        <th colSpan={2} className={`${styles.text_center}`}>City Bank PLC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={`${styles.text_right}`}>Account Name</td>
                                        <td className={`${styles.text_left}`}>BRAC EPL INVESTMENTS LIMITED</td>
                                    </tr>
                                    <tr>
                                        <td className={`${styles.text_right}`}>A/C No:</td>
                                        <td className={`${styles.text_left}`}>1383998323001</td>
                                    </tr>
                                    <tr>
                                        <td className={`${styles.text_right}`}>Branch</td>
                                        <td className={`${styles.text_left}`}>DSE NUKUNJA/Nikunja Sub Branch</td>
                                    </tr>
                                    <tr>
                                        <td className={`${styles.text_right}`}>Branch</td>
                                        <td className={`${styles.text_left}`}>225261279</td>
                                    </tr>
                                    <tr>
                                        <td className={`${styles.text_right}`}>Account Type</td>
                                        <td className={`${styles.text_left}`}>Current</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={`${styles.formcontrol} ${styles.flex_21}`}>
                            <table className={`${styles.w_100} ${styles.mb_20}`}>
                                <thead>
                                    <tr>
                                        <th colSpan={2} className={`${styles.text_center}`}>bKash Wallet</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={`${styles.text_right}`}>Merchant Account Name</td>
                                        <td className={`${styles.text_left}`}>BRAC EPL INVESTMENTS LIMITED</td>
                                    </tr>
                                    <tr>
                                        <td className={`${styles.text_right}`}>Merchant Account No </td>
                                        <td className={`${styles.text_left}`}>01730703949</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </>
                }
            </form>
        </>
    );
};

export default ClientComponent;
