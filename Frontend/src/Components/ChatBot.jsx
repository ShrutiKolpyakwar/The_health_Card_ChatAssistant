import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendMessage } from "../services/api";

function ChatBot() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [symptom, setSymptom] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
    text: `👋 Welcome to Health Assistant

I'm here to help you find the right healthcare provider based on your symptoms.

🏥 Specialties Available

Cardiology (Heart Conditions)
Dermatology (Skin Conditions)
ENT (Ear, Nose & Throat)
Gastroenterology (Digestive Health)
Urology (Kidney & Urinary Health)
General Physician
Diagnostics (MRI, CT Scan, Ultrasound)

🔍 Common Symptoms You Can Search

✓ Chest Pain
✓ Skin Rash
✓ Hair Loss
✓ Hearing Loss
✓ Ear Pain
✓ Acid Reflux
✓ Abdominal Pain
✓ Kidney Stones
✓ Urinary Infection
✓ Cough
✓ Headache
💬 Simply type your symptom below and I'll suggest suitable healthcare providers for you.`
    }
  ]);

  const handleSend = async () => {
    if (!symptom.trim()) return;

    const userMessage = symptom;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage
      }
    ]);

    setSymptom("");

    const result = await sendMessage(userMessage);

    let botReply = "";

    if (result.providers && result.providers.length > 0) {
      botReply = `I don't prescribe any medicine or provide medical diagnoses.

I can help you find healthcare providers based on your symptoms.

For "${userMessage}", you may consider consulting:`;
    } else {
      botReply = result.message;
    }

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: ""
      }
    ]);

    let currentText = "";
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < botReply.length) {
        currentText += botReply.charAt(index);

        setMessages((prev) => {
          const updated = [...prev];

          updated[updated.length - 1] = {
            sender: "bot",
            text: currentText
          };

          return updated;
        });

        index++;
      } else {
        clearInterval(typingInterval);

        if (
          result.providers &&
          result.providers.length > 0
        ) {
          setMessages((prev) => [
            ...prev,
            {
              sender: "providers",
              providers: result.providers
            }
          ]);
        }
      }
    }, 20);
  };

  return (
    <>
      <button
        className="chat-toggle"
        onClick={() => setOpen(!open)}
      >
        💬
      </button>

      {open && (
        <div className="chatbot">
          <div className="chat-header">
            Health Assistant
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => {
              if (msg.sender === "providers") {
                return (
                  <div
                    key={index}
                    className="message bot"
                  >
                    {/* {msg.providers.map((provider) => (
                      <div
                        key={provider.id}
                        className="provider-link"
                        onClick={() =>
                          navigate(
                            `/provider/${provider.id}`
                          )
                        }
                        style={{
                          cursor: "pointer",
                          color: "#2563eb",
                          marginTop: "8px",
                          textDecoration: "underline"
                        }}
                      >
                        • {provider.name} - {provider.location}
                      </div>
                    ))} */}
                    {msg.providers.map((provider) => (
  <div
    key={provider.id}
    className="chat-provider-card"
    onClick={() =>
      navigate(`/provider/${provider.id}`)
    }
  >
    <h4>{provider.name}</h4>

    <p>{provider.specialty}</p>

    <span>📍 {provider.location}</span>
  </div>
))}
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className={`message ${msg.sender}`}
                >
                  {msg.text}
                </div>
              );
            })}
          </div>

          <div className="chat-input">
            <input
              value={symptom}
              onChange={(e) =>
                setSymptom(e.target.value)
              }
              placeholder="Type your symptom..."
            />

            <button onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;