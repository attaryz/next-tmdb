export function time_convert(num: number): string {
  const hours = Math.floor(num / 60)
  const minutes = num % 60
  return `${hours}h : ${minutes}m`
}
