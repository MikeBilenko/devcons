import React, { FormEvent, useState } from "react";
import classes from "./styles.module.scss";
import Title from "ui/Title/Title";
import Button from "ui/Button/Button";
import Input from "ui/Input/Input";
import Checkbox from "ui/Checkbox/Checkbox";
import axiosInstance from "pages/api/config";
import { toast } from "react-toastify";

const CalculatePriceForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [softwareSolutionError, setSoftwareSolutionError] = useState(false);
  const [developmentStageError, setDevelopmentStageError] = useState(false);
  const [consultationError, setConsultationError] = useState(false);
  const [durationError, setDurationError] = useState(false);

  const [softwareSolution, setSoftwareSolution] = useState({
    tgBot: false,
    web: false,
    consultancy: false,
    design: false,
  });

  const [developmentStage, setDevelopmentStage] = useState({
    idea: false,
    prototype: false,
    designedSolution: false,
    mvp: false,
  });

  const [consultation, setConsultation] = useState({
    projectManager: false,
    businessAnalyst: false,
    uiUxDesigner: false,
    developer: false,
  });
  const [duration, setDuration] = useState({
    month: false,
    month_to_six: false,
    six_to_year: false,
    more_then_year: false,
  });

  function validateState<T>(state: T): boolean {
    return Object.values(state as Record<keyof T, boolean>).some(
      (value) => value === true
    );
  }

  const handleCheckboxChange = (group: string, name: string) => {
    switch (group) {
      case "softwareSolution":
        setSoftwareSolution({
          tgBot: name === "tgBot",
          web: name === "web",
          consultancy: name === "consultancy",
          design: name === "design",
        });
        break;
      case "developmentStage":
        setDevelopmentStage({
          idea: name === "idea",
          prototype: name === "prototype",
          designedSolution: name === "designedSolution",
          mvp: name === "mvp",
        });
        break;
      case "consultation":
        setConsultation({
          projectManager: name === "projectManager",
          businessAnalyst: name === "businessAnalyst",
          uiUxDesigner: name === "uiUxDesigner",
          developer: name === "developer",
        });
        break;
      case "duration":
        setDuration({
          month: name === "month",
          month_to_six: name === "month_to_six",
          six_to_year: name === "six_to_year",
          more_then_year: name === "more_then_year",
        });
        break;
      default:
        break;
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let _error = false;
    if (!validateEmail(email)) {
      _error = true;
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!validateState(softwareSolution)) {
      _error = true;
      setSoftwareSolutionError(true);
    } else {
      setSoftwareSolutionError(false);
    }

    if (!validateState(developmentStage)) {
      _error = true;
      setDevelopmentStageError(true);
    } else {
      setDevelopmentStageError(false);
    }

    if (!validateState(consultation)) {
      _error = true;
      setConsultationError(true);
    } else {
      setConsultationError(false);
    }

    if (!validateState(duration)) {
      _error = true;
      setDurationError(true);
    } else {
      setDurationError(false);
    }

    if (_error) {
      return false;
    }
    return true;
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const formData = {
      type: "",
      stage: "",
      consultation: "",
      duration: "",
    };

    if (!validateForm()) {
      return;
    }

    if (softwareSolution.tgBot) formData.type = "Telegram Bot";
    if (softwareSolution.web) formData.type = "Web";
    if (softwareSolution.design) formData.type = "Design";
    if (softwareSolution.consultancy) formData.type = "Consultancy needed";

    if (developmentStage.idea) formData.stage = "Idea";
    if (developmentStage.prototype) formData.stage = "Prototype/Specification";
    if (developmentStage.designedSolution) formData.stage = "Designed solution";
    if (developmentStage.mvp) formData.stage = "MVP";

    if (consultation.projectManager) formData.consultation = "Project Manager";
    if (consultation.businessAnalyst)
      formData.consultation = "Business Analyst";
    if (consultation.uiUxDesigner) formData.consultation = "UI/UX Designer";
    if (consultation.developer) formData.consultation = "Developer";

    if (duration.month) formData.duration = "1 month";
    if (duration.month_to_six) formData.duration = "From 1 to 6 months";
    if (duration.six_to_year) formData.duration = "From 6 to 12 months";
    if (duration.more_then_year) formData.duration = "1 year +";

    axiosInstance
      .post(
        `api/v2/calculate-price/`,
        {
          email: email,
          ...formData,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        if (response) {
          setEmail("");
          setSoftwareSolution({
            tgBot: false,
            web: false,
            consultancy: false,
            design: false,
          });

          setDevelopmentStage({
            idea: false,
            prototype: false,
            designedSolution: false,
            mvp: false,
          });

          setConsultation({
            projectManager: false,
            businessAnalyst: false,
            uiUxDesigner: false,
            developer: false,
          });
          setDuration({
            month: false,
            month_to_six: false,
            six_to_year: false,
            more_then_year: false,
          });
          toast.success("Thanks for getting in touch!");
        }
      })
      .catch((e) => {
        toast.error(`Problem submitting the form! ${e}`);
      });
  };

  return (
    <div className={classes.contactWrapper}>
      <Title title="Request the price of the project" />
      <form onSubmit={submit} className={classes.contactForm}>
        <div className={classes.formLabel}>
          1. What type of software solution would you like to develop with dev
          consulting?
        </div>
        <div className={classes.checkboxWrapper}>
          <Checkbox
            label="Telegram Bot"
            checked={softwareSolution.tgBot}
            onChange={() => handleCheckboxChange("softwareSolution", "tgBot")}
          />
          <Checkbox
            label="Web"
            checked={softwareSolution.web}
            onChange={() => handleCheckboxChange("softwareSolution", "web")}
          />
          <Checkbox
            label="Design"
            checked={softwareSolution.design}
            onChange={() => handleCheckboxChange("softwareSolution", "design")}
          />
          <Checkbox
            label="Consultancy needed"
            checked={softwareSolution.consultancy}
            onChange={() =>
              handleCheckboxChange("softwareSolution", "consultancy")
            }
          />
        </div>
        {softwareSolutionError && (
          <div className={classes.error}>
            This field is required. Select one from above.
          </div>
        )}
        <div className={classes.formLabel}>
          2. What is the current stage of your software development process?
        </div>
        <div className={classes.checkboxWrapper}>
          <Checkbox
            label="Idea"
            checked={developmentStage.idea}
            onChange={() => handleCheckboxChange("developmentStage", "idea")}
          />
          <Checkbox
            label="Prototype/Specification"
            checked={developmentStage.prototype}
            onChange={() =>
              handleCheckboxChange("developmentStage", "prototype")
            }
          />
          <Checkbox
            label="Designed solution"
            checked={developmentStage.designedSolution}
            onChange={() =>
              handleCheckboxChange("developmentStage", "designedSolution")
            }
          />
          <Checkbox
            label="MVP"
            checked={developmentStage.mvp}
            onChange={() => handleCheckboxChange("developmentStage", "mvp")}
          />
        </div>
        {developmentStageError && (
          <div className={classes.error}>
            This field is required. Select one from above.
          </div>
        )}
        <div className={classes.formLabel}>
          3. Do you need a professional consultation from any of the specialists
          below?
        </div>
        <div className={classes.checkboxWrapper}>
          <Checkbox
            label="Project Manager"
            checked={consultation.projectManager}
            onChange={() =>
              handleCheckboxChange("consultation", "projectManager")
            }
          />
          <Checkbox
            label="Business Analyst"
            checked={consultation.businessAnalyst}
            onChange={() =>
              handleCheckboxChange("consultation", "businessAnalyst")
            }
          />
          <Checkbox
            label="UI/UX Designer"
            checked={consultation.uiUxDesigner}
            onChange={() =>
              handleCheckboxChange("consultation", "uiUxDesigner")
            }
          />
          <Checkbox
            label="Developer"
            checked={consultation.developer}
            onChange={() => handleCheckboxChange("consultation", "developer")}
          />
        </div>
        {consultationError && (
          <div className={classes.error}>
            This field is required. Select one from above.
          </div>
        )}
        <div className={classes.formLabel}>
          4. What is the expected duration of your project?
        </div>
        <div className={classes.checkboxWrapper}>
          <Checkbox
            label="1 month"
            checked={duration.month}
            onChange={() => handleCheckboxChange("duration", "month")}
          />
          <Checkbox
            label="From 1 to 6 months"
            checked={duration.month_to_six}
            onChange={() => handleCheckboxChange("duration", "month_to_six")}
          />
          <Checkbox
            label="From 6 to 12 months"
            checked={duration.six_to_year}
            onChange={() => handleCheckboxChange("duration", "six_to_year")}
          />
          <Checkbox
            label="1 year +"
            checked={duration.more_then_year}
            onChange={() => handleCheckboxChange("duration", "more_then_year")}
          />
        </div>
        {durationError && (
          <div className={classes.error}>
            This field is required. Select one from above.
          </div>
        )}

        <div className={classes.submitForm}>
          <Input
            type="email"
            label="Email"
            placeholder="Your email"
            error={emailError}
            errorMessage="Enter valid email."
            value={email}
            setValue={setEmail}
          />
          <Button
            className={`${classes.big} ${
              emailError ? classes.errorButton : ""
            }`}
            type="submit"
          >
            Get Pricing
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CalculatePriceForm;
