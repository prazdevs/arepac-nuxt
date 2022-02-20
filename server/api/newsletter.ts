import { useMethod, useBody } from 'h3'

import type { IncomingMessage, ServerResponse } from 'http'

import config from '#config'

export default async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<ServerResponse> => {
  //* Only accepts POST requests
  if (useMethod(req) !== 'POST') return res.writeHead(405).end()

  const { email, fullname, token } = await useBody<{
    email: string
    fullname: string
    token: string
  }>(req)

  //* Requires 3 parameters
  if (!email || !fullname || !token) return res.writeHead(400).end()

  //* Verify issued token
  const { success, score } = await $fetch<{ success: boolean; score: number }>(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      params: {
        response: token,
        secret: config.RECAPTCHA_SECRET,
      },
    }
  )

  //* Rejects if considered bot
  if (!success || score < 0.5) return res.writeHead(403).end()

  // TODO : call SendinBlue API to add new line

  return res.writeHead(200).end()
}
