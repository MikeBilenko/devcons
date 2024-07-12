import { FormEvent, useState } from "react";
import classes from "./styles.module.scss";
import Title from "ui/Title/Title";
import Input from "ui/Input/Input";
import Button from "ui/Button/Button";
import Checkbox from "ui/Checkbox/Checkbox";
import TextInput from "ui/TextInput/TextInput";
import FileInput from "ui/FileInput/FileInput";
import axiosInstance from "pages/api/config";
import { toast } from "react-toastify";
import {
  parsePhoneNumberFromString,
  getCountries,
  CountryCode,
} from "libphonenumber-js";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("");
  const [nda, setNda] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [industryError, setIndustryError] = useState(false);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    try {
      const phoneNumberInstance = parsePhoneNumberFromString(phoneNumber);

      if (phoneNumberInstance?.isValid()) {
        return true;
      }

      const countries = getCountries();
      for (const country of countries) {
        const countryPhoneNumberInstance = parsePhoneNumberFromString(
          phoneNumber,
          country as CountryCode
        );
        if (countryPhoneNumberInstance?.isValid()) {
          return true;
        }
      }
    } catch (error) {
      console.error("Error parsing phone number:", error);
    }

    return false;
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    let _error = false;
    if (!name?.length) {
      _error = true;
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!validateEmail(email)) {
      _error = true;
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!validatePhoneNumber(phone)) {
      _error = true;
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    if (!message?.length) {
      _error = true;
      setMessageError(true);
    } else {
      setMessageError(false);
    }

    if (!industry?.length) {
      _error = true;
      setIndustryError(true);
    } else {
      setIndustryError(false);
    }

    if (_error) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("industry", industry);
    formData.append("nda", nda.toString());
    formData.append("message", message);
    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    axiosInstance
      .post(`api/v2/contacts/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response) {
          setName("");
          setEmail("");
          setIndustry("");
          setMessage("");
          setPhone("");
          setSelectedFile(null);
          setNda(false);
          toast.success("Thanks for getting in touch!");
        }
      })
      .catch((e) => {
        toast.error(`Problem submitting the form! ${e}`);
      });
  };

  return (
    <div className={classes.contactWrapper}>
      <Title title="Get in touch" />
      <form onSubmit={submit} className={classes.contactForm}>
        <div className={classes.formDescription}>
          <h2 className={classes.formTitle}>Free software consultation</h2>
          <div className={classes.formSubtitle}>What happens next?</div>
          <div className={classes.steps}>
            <div className={classes.stepsLeftSide}>
              <div className={classes.stepNumber}>1</div>
              <div className={classes.divider} />
              <div className={classes.stepNumber}>2</div>
              <div className={classes.divider} />
              <div className={classes.stepNumber}>3</div>
            </div>

            <div className={classes.stepsWrightSide}>
              <div>
                An expert contacts you after having analyzed your requirements;
              </div>
              <div>
                If needed, we sign an NDA to ensure the highest privacy level;
              </div>
              <div>
                We submit a detailed project proposal to develop custom software
                for you.
              </div>
            </div>
          </div>
        </div>
        <div className={classes.inputWrapper}>
          <Input
            value={name}
            setValue={setName}
            type="text"
            label="Name"
            placeholder="Your name"
            errorMessage="This field is required."
            error={nameError}
          />
          <Input
            value={email}
            setValue={setEmail}
            type="email"
            label="Email"
            placeholder="Your email"
            errorMessage="Enter valid email."
            error={emailError}
          />
          <Input
            value={phone}
            setValue={setPhone}
            type="text"
            label="Phone"
            placeholder="Your phone"
            errorMessage="Enter valid phone number."
            error={phoneError}
          />
          <Input
            value={industry}
            setValue={setIndustry}
            type="text"
            label="Industry"
            placeholder="Your industry"
            errorMessage="This field is required."
            error={industryError}
          />
          <TextInput
            label="Message"
            placeholder="Please describe your project requirements"
            value={message}
            setValue={setMessage}
            errorMessage="This field required."
            error={messageError}
          />
          <FileInput
            label="Drag and drop a file here"
            onFileSelect={handleFileSelect}
          />

          <Checkbox
            checked={nda}
            onChange={setNda}
            label="I want to protect my data by signing an NDA."
          />
          <Button type="submit" className={classes.submitButton}>
            Send request
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
