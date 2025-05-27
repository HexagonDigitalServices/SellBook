const validateForm = () => {
  const newErrors = {}
  if (!formData.name.trim()) newErrors.name = "Name is required"
  if (!formData.email.trim()) newErrors.email = "Email is required"
  if (!formData.message.trim()) newErrors.message = "Message is required"
  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}

const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`