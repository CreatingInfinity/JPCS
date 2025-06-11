import React, { useState } from "react";
import { logo } from "../../utils";
import { db, storage } from "../../Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
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
  const [uploading, setUploading] = useState(false);
  const [passportFile, setPassportFile] = useState(null);
  const [immigrationFile, setImmigrationFile] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    if (file && ["application/pdf", "image/jpeg", "image/png"].includes(file.type)) {
      setter(file);
      setError("");
    } else {
      setter(null);
      setError("Invalid file format. Only PDF or image allowed.");
    }
  };

  const uploadFile = async (file, prefix) => {
    const fileRef = ref(storage, `uploads/${prefix}-${uuidv4()}-${file.name}`);
    await uploadBytes(fileRef, file);
    return getDownloadURL(fileRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passportFile || !immigrationFile) {
      setError("Passport and Immigration form must be uploaded.");
      return;
    }

    setUploading(true);
    setError("");

    try {
      const passportUrl = await uploadFile(passportFile, "passport");
      const immigrationUrl = await uploadFile(immigrationFile, "immigration");

      await addDoc(collection(db, "australiaSubmission"), {
        ...formData,
        passportUrl,
        immigrationUrl,
        submittedAt: Timestamp.now(),
      });

      setSubmitted(true);
      alert("Application submitted successfully!");
    } catch (err) {
      console.error(err);
      setError("Submission failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-gray-50 borderInput">
      <div className="min-h-screen flex flex-col items-center p-6 text-gray-800">
        <Link to="/" className="flex items-center mb-6 gap-5 text-2xl font-bold josefin">
          <img src={logo} alt="logo" className="h-15" />
          <span><span className="text-orange-500">JP</span> Consulting & Services</span>
        </Link>

        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Australia Visa Application</h2>

          {submitted ? (
            <div className="text-center text-green-600 font-semibold">
              Your application has been submitted successfully!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <fieldset className="border rounded p-6 border-gray-300">
                <legend className="text-lg font-semibold text-orange-600">
                  Part 1: Personal Identification
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="input" />
                  <input name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} className="input" />
                  <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="input" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <input name="birthDate" type="date" value={formData.birthDate} onChange={handleChange} required className="input" />
                  <input name="birthPlace" placeholder="Place of Birth" value={formData.birthPlace} onChange={handleChange} required className="input" />
                </div>
              </fieldset>

              {/* Passport Info */}
              <fieldset className="border rounded p-6 border-gray-300">
                <legend className="text-lg font-semibold text-orange-600">
                  Part 2: Passport Information
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <input name="passportNumber" placeholder="Passport Number" value={formData.passportNumber} onChange={handleChange} required className="input" />
                  <input name="passportIssueDate" type="date" value={formData.passportIssueDate} onChange={handleChange} required className="input" />
                  <input name="passportExpiryDate" type="date" value={formData.passportExpiryDate} onChange={handleChange} required className="input" />
                </div>
              </fieldset>

              {/* Contact Info */}
              <fieldset className="border rounded p-6 border-gray-300">
                <legend className="text-lg font-semibold text-orange-600">
                  Part 3: Contact Information
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input" />
                  <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="input" />
                </div>
                <div className="mt-4">
                  <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="input w-full" />
                </div>
              </fieldset>

              {/* File Upload Section */}
              <div className="p-4">
                <h3 className="mb-4 text-xl font-semibold">Upload Passport & Immigration Form</h3>
                <div className="mb-4">
                  <label className="block mb-1 font-medium">Passport (PDF or Image):</label>
                  <input type="file" accept="application/pdf,image/jpeg,image/png" onChange={(e) => handleFileChange(e, setPassportFile)} />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-medium">Immigration Form (PDF or Image):</label>
                  <input type="file" accept="application/pdf,image/jpeg,image/png" onChange={(e) => handleFileChange(e, setImmigrationFile)} />
                </div>
                {error && <p className="text-red-500">{error}</p>}
              </div>

              {/* Purpose, Travel & Notes */}
              <div className="grid grid-cols-1 gap-4">
                <select name="purpose" value={formData.purpose} onChange={handleChange} required className="input">
                  <option value="">Select Purpose of Visit</option>
                  <option value="Tourism">Tourism</option>
                  <option value="Business">Business</option>
                  <option value="Education">Education</option>
                  <option value="Family Visit">Family Visit</option>
                </select>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} required className="input" />
                  <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} required className="input" />
                </div>
                <textarea name="notes" rows="4" placeholder="Additional Notes" value={formData.notes} onChange={handleChange} className="input resize-none px-2 border-1 border-gray-400 rounded"></textarea>
              </div>

              <div className="flex justify-center pt-4">
                <button type="submit" disabled={uploading} className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 font-semibold rounded transition">
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
