const Timezone = 3

export const dateNow = () => {
  const now = new Date()
  return now.setUTCHours(now.getUTCHours() + Timezone)
}
