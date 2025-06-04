import React, { useState } from "react";
import { logo } from "../../utils";
import { db } from "../../Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Passport from "./Passport";
import { Link } from "react-router-dom";

const VisaApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthDate: "",
    birthPlace: "",
    passportNumber: "",
    passportIssueDate: "",
    passportExpiryDate: "",
    email: "",
    phone: "",
    address: "",
    purpose: "",
    travelDate: "",
    returnDate: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passportFile || !immigrationFile) {
      alert("Please select both valid Passport and Immigration form PDFs.");
      return;
    }

    setUploading(true);

    try {
      // Upload both files and get URLs
      const passportUrl = await uploadFile(passportFile);
      const immigrationUrl = await uploadFile(immigrationFile);

      // Save all form data + uploaded URLs in Firestore
      await addDoc(collection(db, "australiaSubmission"), {
        ...formData,
        passportUrl,
        immigrationUrl,
        submittedAt: Timestamp.now(),
      });

      setSubmitted(true);
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(
        "There was an error submitting your application. Please try again."
      );
    } finally {
      setUploading(false);
    }
  };

  const [passportFile, setPassportFile] = useState(null);
  const [immigrationFile, setImmigrationFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState({
    passport: "",
    immigration: "",
  });

  const cloudName = "djvwufkgb";
  const unsignedUploadPreset = "Visa Australia";

  const handlePassportChange = (e) => {
    setPassportFile(e.target.files[0]);
  };

  const handleImmigrationChange = (e) => {
    setImmigrationFile(e.target.files[0]);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", unsignedUploadPreset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return data.secure_url;
  };

  const saveUrlsToFirestore = async (passportUrl, immigrationUrl) => {
    try {
      const docRef = await addDoc(collection(db, "australiaSubmission"), {
        passportUrl,
        immigrationUrl,
        uploadedAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e; // re-throw so upload handler can catch
    }
  };

  const handleUpload = async () => {
    if (!passportFile || !immigrationFile) {
      alert("Please select both valid Passport and Immigration form PDFs.");
      return;
    }

    setUploading(true);
    try {
      const passportUrl = await uploadFile(passportFile);
      const immigrationUrl = await uploadFile(immigrationFile);
      setUploadedUrls({ passport: passportUrl, immigration: immigrationUrl });

      // Save URLs to Firebase Firestore
      await saveUrlsToFirestore(passportUrl, immigrationUrl);

      alert("Both files uploaded and saved successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-gray-50 borderInput">
      <div className="min-h-screen flex flex-col items-center relative z-15 text-gray-800 p-6">
        <Link to="/" className="flex items-center mb-6 josefin font-bold gap-5 text-2xl">
          <img className="h-15" src={logo} alt="" />
          <p>
            <span className="text-orange-500">JP</span> Consulting & Services
          </p>
        </Link>

        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Australia Visa Application
          </h2>

          {submitted ? (
            <div className="text-center text-green-600 font-semibold">
              Your application has been submitted successfully!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Part 1: Personal Identification */}
              <fieldset className="border rounded p-6 border-gray-300">
                <legend className="text-lg font-semibold text-orange-600">
                  Part 1: Personal Identification
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <input
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                  <input
                    name="middleName"
                    placeholder="Middle Name"
                    value={formData.middleName}
                    onChange={handleChange}
                    className="input"
                  />
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <input
                    name="birthDate"
                    type="date"
                    placeholder="Birthdate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                  <input
                    name="birthPlace"
                    placeholder="Place of Birth"
                    value={formData.birthPlace}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
              </fieldset>

              {/* Part 2: Passport Information */}
              <fieldset className="border rounded p-6 border-gray-300">
                <legend className="text-lg font-semibold text-orange-600">
                  Part 2: Passport Information
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <input
                    name="passportNumber"
                    placeholder="Passport Number"
                    value={formData.passportNumber}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                  <input
                    name="passportIssueDate"
                    type="date"
                    placeholder="Issue Date"
                    value={formData.passportIssueDate}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                  <input
                    name="passportExpiryDate"
                    type="date"
                    placeholder="Expiry Date"
                    value={formData.passportExpiryDate}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
              </fieldset>

              {/* Part 3: Contact Information */}
              <fieldset className="border rounded p-6 border-gray-300">
                <legend className="text-lg font-semibold text-orange-600">
                  Part 3: Contact Information
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
                <div className="mt-4">
                  <input
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="input w-full"
                  />
                </div>
              </fieldset>

              <div className="p-4">
                <h2 className="mb-4 text-xl font-semibold">
                  Upload Valid Passport and Immigration Form (PDF)
                </h2>

                <div className="mb-4">
                  <label className="block mb-1 font-medium">
                    Passport (PDF):
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handlePassportChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 font-medium">
                    Immigration Form (PDF):
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleImmigrationChange}
                  />
                </div>

                {uploadedUrls.passport && (
                  <div className="mt-4">
                    <p>Passport File URL:</p>
                    <a
                      href={uploadedUrls.passport}
                      target="_blank"
                      rel="noreferrer"
                      className="text-orange-600 underline"
                    >
                      {uploadedUrls.passport}
                    </a>
                  </div>
                )}

                {uploadedUrls.immigration && (
                  <div className="mt-2">
                    <p>Immigration Form URL:</p>
                    <a
                      href={uploadedUrls.immigration}
                      target="_blank"
                      rel="noreferrer"
                      className="text-orange-600 underline"
                    >
                      {uploadedUrls.immigration}
                    </a>
                  </div>
                )}
              </div>

              {/* Purpose and Dates */}
              <div className="grid grid-cols-1 gap-4">
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  className="input"
                >
                  <option value="">Select Purpose of Visit</option>
                  <option value="Tourism">Tourism</option>
                  <option value="Business">Business</option>
                  <option value="Education">Education</option>
                  <option value="Family Visit">Family Visit</option>
                </select>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
                <textarea
                  name="notes"
                  rows="4"
                  placeholder="Additional Notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="input resize-none px-2 border-1 border-gray-400 rounded"
                ></textarea>
              </div>

              <div className="w-full flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={uploading}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
                >
                  {uploading ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisaApplicationForm;
