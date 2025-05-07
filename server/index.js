require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  const searchData = [
    {
      category: "EmploymentServices",
      items: [
        {
          title: "CASTING AGENCY",
          link: "CastingAgency",
        },
        {
          title: "ONLINE EMPLOYMENT PLACEMENT AGENCIES",
          link: "OnLine",
        },
        {
          title: "PERSONNEL SEARCH",
          link: "Personel",
        },
      ],
    },
    {
      category: "Business",
      items: [
        {
          title: "BLUEPRINTING",
          link: "Blueprinting",
        },
        {
          title: "DOCUMENT EDITING",
          link: "DocumentEditing",
        },
        {
          title: "DOCUMENT SETUP",
          link: "DocumentSetup",
        },
        {
          title: "DUPLICATING",
          link: "Duplicating",
        },
        {
          title: "PHOTOCOPYING",
          link: "Photocopying",
        },
        {
          title: "PROVISION",
          link: "Provision",
        },
        {
          title: "RESUME",
          link: "Resume",
        },
        {
          title: "SECRETARIAL SUPPORT",
          link: "SecretarialSupport",
        },
        {
          title: "TRANSCRIPTION",
          link: "Transcription",
        },
        {
          title: "TYPOGRAPHY",
          link: "Typography",
        },
      ],
    },
    {
      category: "ITServices",
      items: [
        {
          title: "AI",
          link: "Al",
        },
        {
          title: "CYBER RISK",
          link: "CyberRisk",
        },
        {
          title: "CYBER SECURITY",
          link: "CyberSecurity",
        },
        {
          title: "IT SECURITY",
          link: "ITSecurity",
        },
        {
          title: "SECURITY SYSTEM",
          link: "SecuritySystem",
        },
        {
          title: "SETTING UP",
          link: "SettingUp",
        },
        {
          title: "SOFTWARE INSTALLATION",
          link: "SoftwareInstall",
        },
      ],
    },
    {
      category: "MarketingStrategies",
      items: [
        {
          title: "ADVICE",
          link: "Advice",
        },
        {
          title: "CARGO FREIGHT",
          link: "CargoFreight",
        },
        {
          title: "DESIGN OF ACCOUNTING METHODS",
          link: "Desing",
        },
        {
          title: "DIGITAL CONTENT",
          link: "DigitalContent",
        },
        {
          title: "HEALTH MANAGEMENT",
          link: "HealthManagement",
        },
        {
          title: "HOSPITALITY MANAGEMENT",
          link: "HospitalityConsultancy",
        },
        {
          title: "IMMIGRATION CONSULTANCY",
          link: "ImmigrationConsultancy",
        },
        {
          title: "LOBBYING ACTIVITIES",
          link: "Lobbying",
        },
        {
          title: "LOGISTIC CONSULTANCY",
          link: "Logistic",
        },
        {
          title: "MARKETING CONSULTANCY",
          link: "MarketingConsultancy",
        },
        {
          title: "PROCUREMENT CONSULTANCY",
          link: "ProcurementConsulting",
        },
        {
          title: "PROJECT MANAGEMENT",
          link: "ProjectManagement",
        },
        {
          title: "PUBLIC RELATION SERVICES",
          link: "PublicRelationManagement",
        },
        {
          title: "QUALITY CONSULTANCY",
          link: "QualityConsultancy",
        },
        {
          title: "STRATEGY ADVISORY SERVICES",
          link: "Strategy",
        },
      ],
    },
  ];

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-70b-8192', 
        messages: [
          { role: 'system', 
            content: 'You are a helpful and kind assistant of JP Consulting and Services. The email for for JP Consulting and Services is jpcs.uae@gmail.com with a contact number +971 50 846 8709. Also keep your answers short. ' },
          { role: 'user', content: message }
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ message: reply });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get response from Groq.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
