import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase";

const Passport = () => {
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
    <div className="p-4">
      <h2 className="mb-4 text-xl font-semibold">
        Upload Valid Passport and Immigration Form (PDF)
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Passport (PDF):</label>
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

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="px-4 py-2 bg-orange-600 cursor-pointer text-white rounded"
      >
        {uploading ? "Uploading..." : "Upload Both Files"}
      </button>

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
  );
};

export default Passport;
