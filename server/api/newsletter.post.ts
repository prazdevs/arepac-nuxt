export default defineEventHandler(async event => {
  const { email, fullname, token } = await useBody<{
    email: string
    fullname: string
    token: string
  }>(event)

  //* Requires 3 parameters
  if (!email || !fullname || !token) throw createError({ statusCode: 400 })

  //* Verifies issued token
  const { success, score } = await $fetch<{ success: boolean; score: number }>(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      params: {
        response: token,
        secret: useRuntimeConfig().RECAPTCHA_SECRET,
      },
    }
  )

  if (!success || score < 0.5) throw createError({ statusCode: 403 })

  // TODO : call SendinBlue API to add new line
})
