export function timeAgo(date: string) {
  const now = new Date().getTime()
  const past = new Date(date).getTime()
  const diff = Math.floor((now - past) / 1000)

  if (diff < 60) return "Just now"
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`
  if (diff < 604800) return `${Math.floor(diff / 86400)} day ago`
  
  return new Date(date).toLocaleDateString()
}
