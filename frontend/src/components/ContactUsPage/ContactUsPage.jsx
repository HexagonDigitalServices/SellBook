  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
const [toast, setToast] = useState({ visible: false, message: "", type: "info" })


const validateForm = () => {
  const newErrors = {}
  if (!formData.name.trim()) newErrors.name = "Name is required"
  if (!formData.email.trim()) newErrors.email = "Email is required"
  if (!formData.message.trim()) newErrors.message = "Message is required"
  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}

const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`



    const textLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone && `Phone: ${formData.phone}`,
      formData.subject && `Subject: ${formData.subject}`,
      `Message: ${formData.message}`,
    ].filter(Boolean)
    const text = textLines.join("\n")
