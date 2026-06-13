// Format a timestamp as YYYY-MM-DD for journal display and storage.
export function formatDate(time = Date.now()): string {
  const date = new Date(time)
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')
  return `${year}-${month}-${day}`
}
