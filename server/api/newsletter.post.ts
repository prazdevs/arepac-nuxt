export default defineEventHandler(async event => {
  const { email, fullname, token } = await useBody<{
    email: string
    fullname: string
    token: string
  }>(event)

  //* Requires 3 parameters
  if (!email || !fullname || !token)
    throw createError({ statusCode: 400, statusMessage: 'Bad Request' })

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

  console.info('Got score:', score)

  if (!success || score < 0.5)
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })

  console.log('New client', email, fullname)

  // TODO : call SendinBlue API to add new line
})
