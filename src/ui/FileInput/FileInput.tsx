import React, { useState, useRef } from "react";
import classes from "./styles.module.scss";
import { FaFile } from "react-icons/fa";

interface FileInputProps {
  label?: string;
  onFileSelect: (file: File) => void;
}

const FileInput: React.FC<FileInputProps> = ({
  label = "Upload File",
  onFileSelect,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      onFileSelect(file);
      setSelectedFile(file);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      onFileSelect(file);
      setSelectedFile(file);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <div
        className={`${classes.fileInput} ${dragging ? classes.dragging : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {!selectedFile && <label className={classes.label}>{label}</label>}
        <input
          ref={inputRef}
          type="file"
          className={classes.input}
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.txt,.rtf,.jpg,.jpeg,.png,.gif"
        />
        {selectedFile && (
          <div className={classes.fileSelected}>
            <FaFile /> {selectedFile.name}
          </div>
        )}
      </div>
      <div className={classes.helpText}>
        No more than 1 file may be attached up to 3MB. <br />
        Formats: doc, docx, pdf, ppt, pptx.
      </div>
    </div>
  );
};

export default FileInput;
