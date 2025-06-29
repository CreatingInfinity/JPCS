import React, { useState } from "react";
import { db, storage } from "../../../Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const ManualMlhuillier = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    email: "",
    phone: "",
    selection: "",
    education: {
      course: "",
      duration: "",
      university: "",
    },
  });
  const [workHistoryList, setWorkHistoryList] = useState([
    { start: "", end: "", company: "" },
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [passportFile, setPassportFile] = useState(null);
  const [immigrationFile, setImmigrationFile] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.education) {
      setFormData((prev) => ({
        ...prev,
        education: {
          ...prev.education,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleWorkHistoryChange = (index, e) => {
    const { name, value } = e.target;
    const updatedWorkHistory = [...workHistoryList];
    updatedWorkHistory[index][name] = value;
    setWorkHistoryList(updatedWorkHistory);
  };

  const addWorkHistory = () => {
    setWorkHistoryList((prev) => [
      ...prev,
      { start: "", end: "", company: "" },
    ]);
  };

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    if (
      file &&
      ["application/pdf", "image/jpeg", "image/png"].includes(file.type)
    ) {
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
      const refCode = `ML-${Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase()}`;
      const passportUrl = await uploadFile(passportFile, "passport");
      const immigrationUrl = await uploadFile(immigrationFile, "immigration");
      await addDoc(collection(db, "mlhuillerSubmissions"), {
        ...formData,
        workHistory: workHistoryList,
        referenceCode: refCode,
        passportUrl,
        immigrationUrl,
        approved: false,
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
        <div className="w-full max-w-300 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Manual Submission
          </h2>

          {submitted ? (
            <div className="text-center text-green-600 font-semibold">
              Your application has been submitted successfully!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="input w-full"
              />
              <input
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
                required
                className="input w-full"
              />
              <div className="flex gap-2">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input w-full"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input w-full"
                />
              </div>
              <select
                name="selection"
                value={formData.selection}
                onChange={handleChange}
                required
                className="input w-full border-b-1 border-black outline-none py-2"
              >
                <option value="">Select Option</option>
                <option value="Tourism">Tourism</option>
                <option value="Business">Business</option>
                <option value="Education">Education</option>
                <option value="Family Visit">Family Visit</option>
              </select>

              <div>
                <label className="block font-medium">Upload Passport</label>
                <input
                  type="file"
                  accept="application/pdf,image/jpeg,image/png"
                  onChange={(e) => handleFileChange(e, setPassportFile)}
                />
              </div>
              <div>
                <label className="block font-medium">
                  Upload Immigration Form
                </label>
                <input
                  type="file"
                  accept="application/pdf,image/jpeg,image/png"
                  onChange={(e) => handleFileChange(e, setImmigrationFile)}
                />
              </div>

              <fieldset className="border rounded p-4 space-y-2">
                <legend className="text-md font-semibold">
                  Education Background
                </legend>
                <div className="flex gap-2">
                  <input
                    name="course"
                    placeholder="Course"
                    value={formData.education.course}
                    onChange={handleChange}
                    className="input w-full"
                  />
                  <input
                    name="duration"
                    placeholder="Duration"
                    value={formData.education.duration}
                    onChange={handleChange}
                    className="input w-full"
                  />
                </div>
                <input
                  name="university"
                  placeholder="University"
                  value={formData.education.university}
                  onChange={handleChange}
                  className="input w-full"
                />
              </fieldset>

              {workHistoryList.map((entry, index) => (
                <fieldset
                  key={index}
                  className="border rounded p-4 space-y-2 mb-2"
                >
                  <legend className="text-md font-semibold">
                    Work History
                  </legend>
                  <div className="flex gap-2 items-center">
                    <label>Start:</label>
                    <input
                      name="start"
                      type="date"
                      value={entry.start}
                      onChange={(e) => handleWorkHistoryChange(index, e)}
                      className="input w-full"
                    />
                    <label>End:</label>
                    <input
                      name="end"
                      type="date"
                      value={entry.end}
                      onChange={(e) => handleWorkHistoryChange(index, e)}
                      className="input w-full"
                    />
                  </div>
                  <input
                    name="company"
                    placeholder="Company"
                    value={entry.company}
                    onChange={(e) => handleWorkHistoryChange(index, e)}
                    className="input w-full"
                  />
                </fieldset>
              ))}

              <button
                type="button"
                onClick={addWorkHistory}
                className="w-full flex justify-center hover:bg-gray-100 py-3 rounded-xs cursor-pointer"
              >
                <svg
                  height="20px"
                  viewBox="0 0 32 32"
                  fill="#808080"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049"
                    transform="translate(-362 -1037)"
                  />
                </svg>
              </button>

              {error && <p className="text-red-500">{error}</p>}

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={uploading}
                  className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 font-semibold rounded"
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

export default ManualMlhuillier;
